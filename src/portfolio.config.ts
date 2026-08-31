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
// NOTE: nothing imports this file today. `scripts/prebuild.mjs` keeps its own
// REPOS array and is what actually generates `src/generated/projects.json`.
// Kept in sync by hand so the two don't contradict each other.
export const REPOS: RepoEntry[] = [
  { repo: "pixel-studio" },
  { repo: "data-center-tycoon" },
  { repo: "clip-cut-ai" },
  { repo: "watch-party" },
  { repo: "bim-trace" },
  { repo: "aura" },
  // Hidden for now — both are terminal-based with no usable screenshot.
  // { repo: "folio" },
  // { repo: "tmux-configs" },
];
