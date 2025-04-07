import React from "react";

type Props = {
  id: number;
  data: string;
  name: string;
  description: string;
  image: string;
  gif: string;
  tech: string[];
  repoSrc: string;
  liveSrc: string;
  clss?: string | null;
  setModalProject: (project: object) => void;
};

const ProjectCard: React.FC<Props> = ({
  id,
  data,
  name,
  description,
  image,
  gif,
  tech,
  repoSrc,
  liveSrc,
  clss,
  setModalProject,
}) => {
  const handleClick = () => {
    const project = {
      id,
      name,
      data,
      image,
      gif,
      description,
      tech,
      repoLink: repoSrc,
      liveLink: liveSrc,
      clss,
    };

    setModalProject(project);
  };
  const n = tech.length;
  return (
    <div
      className="card h-100 project"
      data-project={data}
      data-target={`#${data}Modal`}
      onClick={handleClick}
    >
      <div className="card-img-top">
        <img
          src={image + "?raw=true"}
          className={`card-img ${clss}`}
          alt={name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="tech-stack text-right">
          {tech.map((t, i) => (
            <span key={t} className="tech">
              <p className="txt-2-project">{t}</p>
              {/* Add a '|' to separate tech[i] if tech[i] is not last */}
              {i < n - 1 ? <p className="txt-2-project">|</p> : null}
            </span>
          ))}
        </div>
        <div className="card-footer">
          {repoSrc && (
            <a href={repoSrc} className="btn" target="_blank" rel="noreferrer">
              Source Code
            </a>
          )}
          {liveSrc && (
            <a href={liveSrc} className="btn" target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
