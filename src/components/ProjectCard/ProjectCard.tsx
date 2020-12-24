import React from 'react';

// components
import ProjectCardButtons from '../ProjectCardButtons/ProjectCardButtons';
import ProjectTechList from '../ProjectTechList/ProjectTechList';

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
	return (
		<div
			className="card h-100 project"
			data-project={data}
			data-target={`#${data}Modal`}
			onClick={handleClick}>
			<div className="card-img-top">
				<img
					src={image + '?raw=true'}
					className={`card-img ${clss}`}
					alt={name}
				/>
			</div>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">{description}</p>
				<div className="tech-stack text-right">
					<ProjectTechList tech={tech} />
				</div>
				<ProjectCardButtons repoSrc={repoSrc} liveSrc={liveSrc} />
			</div>
		</div>
	);
};

export default ProjectCard;
