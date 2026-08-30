/**
 * Portfolio configuration — the single place to control which projects
 * appear on the site and in what order.
 *
 * The prebuild script reads this list, fetches data from the GitHub API
 * and each repo's `.portfolio.json`, then writes the merged result to
 * `src/generated/projects.json`.
 */

export interface RepoEntry {
  /** GitHub repo name under the `owner` org/user */
  repo: string;
  /** Override display order (lower = first). Defaults to array index. */
  order?: number;
}

/** GitHub user / org that owns all the repos below */
export const GITHUB_OWNER = "kevinreber";

/**
 * Repos to feature on the portfolio, in default display order.
 * Add or remove entries here to update the site.
 */
export const REPOS: RepoEntry[] = [
  { repo: "pixel-studio" },
  { repo: "clip-cut-ai" },
  { repo: "watch-party" },
  { repo: "data-center-tycoon" },
  { repo: "bim-trace" },
  { repo: "aura" },
  { repo: "folio" },
  { repo: "tmux-configs" },
];
