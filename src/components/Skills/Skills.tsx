import React from 'react';

// data
import generatedProjects from '../../generated/projects.json';
import { WORK_STACK } from '../../data';

type GeneratedProject = { tech?: string[] };

/**
 * Builds the tag list from the tech each project actually declares, so nothing
 * here can claim a technology no shipped project backs up. Sorted by how many
 * projects use it, then alphabetically to keep equal counts stable.
 */
const deriveStack = (projects: GeneratedProject[]) => {
	const counts = new Map<string, number>();

	projects.forEach((project) => {
		(project.tech ?? []).forEach((tech) => {
			counts.set(tech, (counts.get(tech) ?? 0) + 1);
		});
	});

	return Array.from(counts.entries())
		.sort(([aName, aCount], [bName, bCount]) =>
			bCount - aCount || aName.localeCompare(bName)
		)
		.map(([name, count]) => ({ name, count }));
};

const Skills: React.FC = () => {
	const stack = deriveStack(generatedProjects as GeneratedProject[]);

	return (
		<>
			<h3 className="section-heading">Stack</h3>
			<p className="stack-intro">
				Everything below is pulled from the projects above. The number is how
				many of them use it.
			</p>

			<ul className="stack-tags">
				{stack.map(({ name, count }) => (
					<li key={name} className="stack-tag">
						{name}
						{count > 1 && <span className="stack-count">{count}</span>}
					</li>
				))}
			</ul>

			<p className="stack-work">
				<span className="stack-work-label">At work</span>
				{WORK_STACK.join('  ·  ')}
			</p>
		</>
	);
};

export default Skills;
