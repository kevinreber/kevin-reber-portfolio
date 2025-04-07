import React from "react";

// components
import ProjectCard from "../ProjectCard/ProjectCard";

// constants
import { PROJECTS } from "../../data";

type Props = {
  setModalProject: (project: object) => void;
};

const Projects: React.FC<Props> = ({ setModalProject }) => {
  return (
    <>
      <h3 className="section-heading">Projects</h3>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
        {PROJECTS.map((project) => (
          <div className="col mb-4" key={project.id}>
            <ProjectCard
              id={project.id}
              data={project.data}
              name={project.name}
              description={project.description}
              image={project.image}
              gif={project.gif}
              tech={project.tech}
              repoSrc={project.repoLink}
              liveSrc={project.liveLink}
              clss={project.clss}
              setModalProject={setModalProject}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
