/**
 * Prebuild script — fetches project data from the GitHub API and each repo's
 * `.portfolio.json`, then writes a merged `src/generated/projects.json` that
 * the React app imports at build time.
 *
 * Usage:
 *   node scripts/prebuild.mjs
 *
 * Environment:
 *   GITHUB_TOKEN — optional, raises rate limit from 60 → 5 000 req/hr.
 *                  Falls back to `gh auth token` for local dev.
 */

import { execSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "src", "generated");
const OUT_FILE = join(OUT_DIR, "projects.json");

// ── Config ───────────────────────────────────────────────────────────────────
const OWNER = "kevinreber";

const REPOS = [
  "pixel-studio",
  "clip-cut-ai",
  "watch-party",
  "data-center-tycoon",
  "bim-trace",
  "aura",
  "folio",
  "tmux-configs",
];

// Locally-hosted media that wins over the repo's own `.portfolio.json`.
// These are in-app captures rather than landing pages — the repo thumbnails
// mostly show a marketing hero, which says nothing about what the thing does.
// Paths are served from `public/`, so they resolve at the site root.
//
// A repo with no entry here keeps whatever its `.portfolio.json` points at.
//
// pixel-studio pins the media that has always been on kevinreber.dev: the
// archived thumbnail in this repo and the Giphy demo. Its `.portfolio.json`
// points somewhere else (a smaller docs/images thumbnail, and a demo.gif that
// 404s), which is why the card lost its GIF when prebuild took over.
const MEDIA_OVERRIDES = {
  "pixel-studio": {
    thumbnail:
      "https://raw.githubusercontent.com/kevinreber/kevin-reber-portfolio/master/archives/public/images/project%20demos/thumbnails/pixel-studio-ai.png?raw=true",
    demo: "https://media.giphy.com/media/LSr9anHxh6ukbXF87V/source.gif",
  },
  "clip-cut-ai": { thumbnail: "/media/clip-cut-ai.jpg" },
  "watch-party": { thumbnail: "/media/watch-party.jpg" },
  "data-center-tycoon": { thumbnail: "/media/data-center-tycoon.jpg" },
  "bim-trace": { thumbnail: "/media/bim-trace.jpg" },
};

// ── Token ────────────────────────────────────────────────────────────────────
function getToken() {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  try {
    return execSync("gh auth token", { encoding: "utf-8" }).trim();
  } catch {
    console.warn("  No GITHUB_TOKEN and gh CLI not available — using unauthenticated requests");
    return null;
  }
}

const TOKEN = getToken();
const headers = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "kevin-reber-portfolio-prebuild",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

// ── Helpers ──────────────────────────────────────────────────────────────────
async function fetchJSON(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) return null;
  return res.json();
}

async function fetchPortfolioMeta(repo) {
  const url = `https://api.github.com/repos/${OWNER}/${repo}/contents/.portfolio.json`;
  const file = await fetchJSON(url);
  if (!file?.content) return {};
  try {
    return JSON.parse(Buffer.from(file.content, "base64").toString("utf-8"));
  } catch {
    console.warn(`  Warning: invalid .portfolio.json in ${repo}`);
    return {};
  }
}

function rawUrl(repo, path) {
  if (!path) return "";
  // Absolute URLs and site-root paths (local media) pass through untouched
  if (path.startsWith("http") || path.startsWith("/")) return path;
  return `https://raw.githubusercontent.com/${OWNER}/${repo}/main/${path}`;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function buildProject(repo, index) {
  console.log(`  Fetching ${repo}...`);
  const [repoData, meta] = await Promise.all([
    fetchJSON(`https://api.github.com/repos/${OWNER}/${repo}`),
    fetchPortfolioMeta(repo),
  ]);

  if (!repoData) {
    console.error(`  ERROR: Could not fetch repo ${OWNER}/${repo}`);
    return null;
  }

  const order = meta.order ?? index;
  const override = MEDIA_OVERRIDES[repo] ?? {};

  return {
    id: order,
    name: meta.displayName ?? repoData.name,
    data: repoData.name,
    image: rawUrl(repo, override.thumbnail ?? meta.thumbnail) || "",
    gif: rawUrl(repo, override.demo ?? meta.demo) || "",
    description: meta.description ?? repoData.description ?? "",
    tech: meta.tech ?? repoData.topics ?? [],
    repoLink: repoData.private ? "" : repoData.html_url,
    liveLink: meta.liveUrl ?? repoData.homepage ?? "",
  };
}

async function main() {
  console.log("Prebuild: fetching project data from GitHub...\n");

  const results = await Promise.all(
    REPOS.map((repo, i) => buildProject(repo, i))
  );

  const projects = results
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(projects, null, 2) + "\n");

  console.log(`\nPrebuild: wrote ${projects.length} projects to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error("Prebuild failed:", err);
  process.exit(1);
});
