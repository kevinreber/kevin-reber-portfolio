import React, { useRef, useState, useCallback } from "react";
import { Project } from "../../types";

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
  setModalProject: (project: Project) => void;
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
  setModalProject,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }, []);

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
    };

    setModalProject(project);
  };
  // Every project uses React and TypeScript, so listing them on each card
  // costs two slots and differentiates nothing. The Stack section below the
  // grid still names both, and reads from the unfiltered `tech` array — which
  // is why this filter lives here at render time rather than in the data.
  const BASELINE = ["React", "TypeScript"];
  const shownTech = tech.filter((t) => !BASELINE.includes(t));
  const n = shownTech.length;
  return (
    <div
      ref={cardRef}
      className="card h-100 project tilt-card"
      data-project={data}
      data-target={`#${data}Modal`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {image && !imgError && (
        <div className="card-img-top">
          <img
            src={image}
            className="card-img"
            alt={name}
            onError={() => setImgError(true)}
          />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="tech-stack text-right">
          {shownTech.map((t, i) => (
            <span key={t} className="tech">
              <p className="txt-2-project">{t}</p>
              {/* Add a '|' to separate tech[i] if tech[i] is not last */}
              {i < n - 1 ? <p className="txt-2-project">|</p> : null}
            </span>
          ))}
        </div>
        {/* The card itself opens the modal, so a click on either link would
            bubble up and leave the modal open behind the newly-opened tab. */}
        <div className="card-footer" onClick={(e) => e.stopPropagation()}>
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
