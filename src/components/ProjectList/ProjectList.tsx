import React from 'react';

// components
import ProjectCard from '../ProjectCard/ProjectCard';

// constants
import { PROJECTS } from '../../data';

const ProjectList: React.FC = () => {
	const List = PROJECTS.map((project) => (
		<>
			<ProjectCard
				key={project.id}
				data={project.data}
				name={project.name}
				description={project.description}
				image={project.image}
				tech={project.tech}
				repoSrc={project.repoLink}
				liveSrc={project.liveLink}
				clss={project.clss}
			/>
		</>
	));

	return (
		<>
			<h3 className="section-heading">Projects</h3>
			<div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
				{List}
			</div>
		</>
	);
};

export default ProjectList;
