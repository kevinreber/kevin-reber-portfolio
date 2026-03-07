import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'kevinreber';
const CACHE_KEY = 'github_contributions';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
const MONTHS_BACK = 6;

interface Commit {
	message: string;
	date: string;
}

interface RepoContribution {
	name: string;
	url: string;
	description: string | null;
	commits: Commit[];
}

interface WeekBucket {
	weekLabel: string;
	count: number;
}

interface PulseStats {
	totalCommits: number;
	activeRepos: number;
	weeklyActivity: WeekBucket[];
	lastCommitDate: string;
}

interface CachedData {
	timestamp: number;
	contributions: RepoContribution[];
}

function getSinceDate(): string {
	const date = new Date();
	date.setMonth(date.getMonth() - MONTHS_BACK);
	return date.toISOString();
}

function formatCommitMessage(message: string): string {
	// Take only the first line of the commit message
	return message.split('\n')[0];
}

async function fetchContributions(): Promise<RepoContribution[]> {
	const sinceDate = getSinceDate();

	// Fetch repos sorted by most recently pushed
	const reposRes = await fetch(
		`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=10`
	);
	if (!reposRes.ok) throw new Error('Failed to fetch repos');
	const repos = await reposRes.json();

	// Filter repos that were pushed to within our time window
	const recentRepos = repos.filter(
		(repo: { pushed_at: string; fork: boolean }) =>
			new Date(repo.pushed_at) >= new Date(sinceDate) && !repo.fork
	);

	// Fetch recent commits for each repo (in parallel)
	const contributions: RepoContribution[] = (
		await Promise.all(
			recentRepos.slice(0, 6).map(
				async (repo: {
					name: string;
					html_url: string;
					description: string | null;
				}) => {
					try {
						const commitsRes = await fetch(
							`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}&since=${sinceDate}&per_page=10`
						);
						if (!commitsRes.ok) return null;
						const commits = await commitsRes.json();

						if (commits.length === 0) return null;

						return {
							name: repo.name,
							url: repo.html_url,
							description: repo.description,
							commits: commits.map(
								(c: {
									commit: {
										message: string;
										author: { date: string };
									};
								}) => ({
									message: formatCommitMessage(c.commit.message),
									date: c.commit.author.date,
								})
							),
						};
					} catch {
						return null;
					}
				}
			)
		)
	).filter((c): c is RepoContribution => c !== null);

	return contributions;
}

function computePulse(contributions: RepoContribution[]): PulseStats {
	const allCommits = contributions.flatMap((r) => r.commits);
	const totalCommits = allCommits.length;
	const activeRepos = contributions.length;

	// Sort all commit dates
	const dates = allCommits
		.map((c) => new Date(c.date))
		.sort((a, b) => a.getTime() - b.getTime());

	const lastCommitDate =
		dates.length > 0
			? dates[dates.length - 1].toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric',
			  })
			: '';

	// Build weekly buckets for the last 12 weeks
	const now = new Date();
	const weeks: WeekBucket[] = [];
	for (let i = 11; i >= 0; i--) {
		const weekStart = new Date(now);
		weekStart.setDate(weekStart.getDate() - i * 7);
		weekStart.setHours(0, 0, 0, 0);
		const weekEnd = new Date(weekStart);
		weekEnd.setDate(weekEnd.getDate() + 7);

		const count = dates.filter(
			(d) => d >= weekStart && d < weekEnd
		).length;

		weeks.push({
			weekLabel: weekStart.toLocaleDateString('en-US', {
				month: 'short',
				day: 'numeric',
			}),
			count,
		});
	}

	return { totalCommits, activeRepos, weeklyActivity: weeks, lastCommitDate };
}

function getActivityLevel(pulse: PulseStats): { label: string; className: string } {
	const recentWeeks = pulse.weeklyActivity.slice(-4);
	const recentCommits = recentWeeks.reduce((sum, w) => sum + w.count, 0);

	if (recentCommits >= 15) return { label: 'Very Active', className: 'pulse-level-high' };
	if (recentCommits >= 5) return { label: 'Active', className: 'pulse-level-medium' };
	if (recentCommits >= 1) return { label: 'Moderate', className: 'pulse-level-low' };
	return { label: 'Quiet', className: 'pulse-level-quiet' };
}

function getCached(): RepoContribution[] | null {
	try {
		const raw = sessionStorage.getItem(CACHE_KEY);
		if (!raw) return null;
		const cached: CachedData = JSON.parse(raw);
		if (Date.now() - cached.timestamp > CACHE_TTL_MS) return null;
		return cached.contributions;
	} catch {
		return null;
	}
}

function setCache(contributions: RepoContribution[]) {
	try {
		const data: CachedData = { timestamp: Date.now(), contributions };
		sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
	} catch {
		// sessionStorage may be unavailable
	}
}

const GitHubContributions: React.FC = () => {
	const [contributions, setContributions] = useState<RepoContribution[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const cached = getCached();
		if (cached) {
			setContributions(cached);
			setLoading(false);
			return;
		}

		fetchContributions()
			.then((data) => {
				setContributions(data);
				setCache(data);
			})
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<>
				<h3 className="section-heading">Recent Contributions</h3>
				<p className="contributions-loading">Loading contributions from GitHub...</p>
			</>
		);
	}

	if (error || contributions.length === 0) {
		return null;
	}

	const pulse = computePulse(contributions);
	const activity = getActivityLevel(pulse);
	const maxWeekCount = Math.max(...pulse.weeklyActivity.map((w) => w.count), 1);

	return (
		<>
			<h3 className="section-heading">Recent Contributions</h3>

			{/* Activity Pulse */}
			<div className="pulse-container">
				<div className="pulse-stats">
					<div className="pulse-stat">
						<span className="pulse-stat-value">{pulse.totalCommits}</span>
						<span className="pulse-stat-label">Commits</span>
					</div>
					<div className="pulse-stat">
						<span className="pulse-stat-value">{pulse.activeRepos}</span>
						<span className="pulse-stat-label">Active Repos</span>
					</div>
					<div className="pulse-stat">
						<span className={`pulse-stat-value pulse-level ${activity.className}`}>
							{activity.label}
						</span>
						<span className="pulse-stat-label">Status</span>
					</div>
					<div className="pulse-stat">
						<span className="pulse-stat-value pulse-stat-date">{pulse.lastCommitDate}</span>
						<span className="pulse-stat-label">Last Commit</span>
					</div>
				</div>
				<div className="pulse-chart">
					<div className="pulse-chart-bars">
						{pulse.weeklyActivity.map((week, i) => (
							<div key={i} className="pulse-bar-col" title={`${week.weekLabel}: ${week.count} commits`}>
								<div
									className="pulse-bar"
									style={{ height: `${(week.count / maxWeekCount) * 100}%` }}
								/>
							</div>
						))}
					</div>
					<div className="pulse-chart-label">Last 12 weeks</div>
				</div>
			</div>

			<div className="contributions-grid">
				{contributions.map((repo) => (
					<div key={repo.name} className="contribution-card">
						<div className="contribution-card-header">
							<a
								href={repo.url}
								target="_blank"
								rel="noopener noreferrer"
								className="contribution-repo-name"
							>
								{repo.name}
							</a>
							<span className="contribution-count">
								{repo.commits.length} commit{repo.commits.length !== 1 ? 's' : ''}
							</span>
						</div>
						{repo.description && (
							<p className="contribution-description">{repo.description}</p>
						)}
						<ul className="contribution-commits">
							{repo.commits.slice(0, 5).map((commit, i) => (
								<li key={i} className="contribution-commit">
									{commit.message}
								</li>
							))}
							{repo.commits.length > 5 && (
								<li className="contribution-commit contribution-more">
									+{repo.commits.length - 5} more
								</li>
							)}
						</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default GitHubContributions;
