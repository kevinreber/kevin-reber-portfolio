export const NAV_ITEMS = ["Projects", "Stack", "Contributions", "Contact", "Resume"];

export const DESIGN_PORTFOLIO = "https://www.kevinreber.net/";

// TikTok rather than mateapp.us — the account is the more current of the two.
export const MATE = "https://www.tiktok.com/@mateapp.us";

export const SOCIALS = [
  { id: "github", src: "https://github.com/kevinreber" },
  { id: "linkedin", src: "http://bit.ly/kevinreber-linkedin" },
  { id: "codepen", src: "https://codepen.io/kevinreber" },
  { id: "instagram", src: "https://www.instagram.com/k_reebz/" },
  { id: "twitter", src: "https://twitter.com/k_reebz" },
];

export const ABOUT = {
  greeting: "Hello World, my name is",
  subGreeting: "Kevin Reber",
  // Not currently rendered — Hero.tsx hardcodes its own copy. Kept in sync so
  // the two don't drift into contradicting each other.
  aboutLine1:
    "I'm a Senior Software Engineer at LinkedIn, working on automation and tooling for data center infrastructure. I build AI agents at work and on my own, and the tooling and playbooks I ship for them have reached a few thousand people across engineering, product, and design.",
  aboutLine2:
    "Before LinkedIn I co-founded an ed-tech startup out of UC Berkeley's Skydeck.",
};

// Hand-curated: things worth defending in an interview, in reading order
// rather than alphabetical. Skills.tsx intersects this with the tech actually
// declared in generated/projects.json, so an entry only renders if a shipped
// project backs it up, and a project's implementation details (FFmpeg.wasm,
// IFC.js, PDF.js, Nerd Fonts) never leak in just by being in the repo data.
//
// Deliberately absent: Rust, Axum, Ratatui. Folio uses them, but the code was
// AI-written and Kevin wouldn't claim the language in an interview. Project
// usage and personal fluency are different claims; this list is the second one.
export const STACK = [
  "TypeScript",
  "Python",
  "React",
  "Remix",
  "TanStack Start",
  "Tailwind",
  "Three.js",
  "Flask",
  "Convex",
  "Supabase",
  "Prisma",
  "Redis",
  "Kafka",
  "SQLite",
  "Stripe",
  "LangChain",
  "Claude API",
];

// ── Legacy hardcoded projects (kept for reference) ──────────────────────────
// Projects are now fetched from GitHub at build time via scripts/prebuild.mjs
// and read from src/generated/projects.json. See portfolio.config.ts for the
// repo list.
//
// const THUMB_SRC =
//   "https://raw.githubusercontent.com/kevinreber/kevin-reber-portfolio/master/archives/public/images/project%20demos/thumbnails";
//
// const GIF_SRC = "https://media.giphy.com/media";
//
// export const PROJECTS = [
//   {
//     id: 1,
//     name: "Pixel Studio AI",
//     data: "pixel-studio-ai",
//     image: `${THUMB_SRC}/pixel-studio-ai.png`,
//     gif: `${GIF_SRC}/LSr9anHxh6ukbXF87V/source.gif`,
//     description:
//       "Social platform for AI generated content creators to share their work with a community of users.",
//     tech: ["Remix", "ShadCN", "Redis", "Prisma", "Supabase", "LLMs"],
//     repoLink: "",
//     liveLink: "https://www.pixelstudioai.com/",
//   },
//   {
//     id: 2,
//     name: "Student Networking Platform",
//     data: "pare",
//     image: `${THUMB_SRC}/pare-fs.jpg`,
//     gif: `${GIF_SRC}/splNgXYOLuVWzfBcfF/source.gif`,
//     description: "A platform to help college students connect with each other.",
//     tech: ["React", "Redux", "Material UI", "Firebase", "TypeScript"],
//     repoLink: "https://github.com/kevinreber/pare",
//     liveLink: "https://pare-afb7e.web.app/login",
//   },
//   {
//     id: 3,
//     name: "Stock Footage Manager",
//     data: "stockFootage",
//     image: `${THUMB_SRC}/stock-footage.jpg`,
//     gif: `${GIF_SRC}/xqw6X7FFtZrmuIe1Di/source.gif`,
//     description: "Full-stack web application to manage and sell stock footage.",
//     tech: ["Flask", "Pandas", "Google Cloud Platform"],
//     repoLink: "https://bit.ly/kevinreber-stock-footage-app",
//     liveLink: "https://bit.ly/3estscE",
//   },
//   {
//     id: 4,
//     name: "Repo Land",
//     data: "repo-land",
//     image: `${THUMB_SRC}/repo-land.jpg`,
//     gif: `${GIF_SRC}/PpMHgwZmlfCn5Ut6Zz/source.gif`,
//     description: "View your favorite org's github repositories and contributions!",
//     tech: ["React", "Twitter Bootstrap", "Github API"],
//     repoLink: "https://github.com/kevinreber/repo-land",
//     liveLink: "https://suspicious-knuth-590f2a.netlify.app/",
//   },
//   {
//     id: 5,
//     name: "Mastermind",
//     data: "mastermind",
//     image: `${THUMB_SRC}/mastermind.jpg`,
//     gif: `${GIF_SRC}/8tLVeXyfuiA5Txc124/source.gif`,
//     description: "Number guessing game using Random.org's API.",
//     tech: ["Axios", "Sass", "Random API"],
//     repoLink: "http://bit.ly/kevinreber-code-mastermind",
//     liveLink: "https://kevinreber.github.io/mastermind/",
//   },
//   {
//     id: 6,
//     name: "Warbler",
//     data: "warbler",
//     image: `${THUMB_SRC}/warbler.jpg`,
//     gif: `${GIF_SRC}/qMqkMna8HeLs0QdOMe/source.gif`,
//     description: "Full-stack Twitter clone built using Python technologies.",
//     tech: ["Flask", "WTForms", "PostgreSQL"],
//     repoLink: "https://bit.ly/kevinreber-warbler",
//     liveLink: "",
//   },
// ];

export const SKILLS = [
  {
    title: "Design",
    skills: ["Figma", "Photoshop", "Illustrator", "After Effects"],
  },
  {
    title: "Front End",
    skills: [
      "HTML",
      "CSS | SASS",
      "Javascript | TypeScript",
      "React JS | jQuery",
    ],
  },
  {
    title: "Server",
    skills: [
      "Python | Flask",
      "NodeJS | Express",
      "gRPC | Protobufs",
      "Golang",
    ],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB", "GraphQL", "Redis"],
  },
];
