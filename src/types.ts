/** Shape of the `.portfolio.json` file that lives in each project repo. */
export interface PortfolioMeta {
  displayName?: string;
  description?: string;
  tech?: string[];
  thumbnail?: string;
  demo?: string;
  liveUrl?: string;
  order?: number;
}

/** A fully resolved project ready for rendering. */
export interface Project {
  id: number;
  name: string;
  data: string;
  image: string;
  gif: string;
  description: string;
  tech: string[];
  repoLink: string;
  liveLink: string;
}
