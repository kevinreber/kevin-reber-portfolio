import React from "react";

// components
import ProjectCard from "../ProjectCard/ProjectCard";

// data
import generatedProjects from "../../generated/projects.json";
import { Project } from "../../types";

const PROJECTS: Project[] = generatedProjects;

type Props = {
  setModalProject: (project: Project) => void;
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
              setModalProject={setModalProject}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
