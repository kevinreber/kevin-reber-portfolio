import React from 'react';

// MUI
import ProjectCardButtons from '../ProjectCardButtons/ProjectCardButtons';
import ProjectTechList from '../ProjectTechList/ProjectTechList';

// interface Props {
// 	project?: object;
// }

interface Props {
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

const ProjectModal: React.FC<Props> = ({
	id,
	name,
	data,
	image,
	gif,
	description,
	tech,
	repoLink,
	liveLink,
}) => {
	return (
		<React.Fragment>
			<div className="modal-content">
				<div className="modal-gif">
					<img src={gif} className={`modal-img ${data}`} alt={name} />
				</div>
				<div className="modal-body">
					<div className="modal-header">
						<h5 className="modal-title card-title">{name}</h5>
						<p className="modal-text card-text">{description}</p>
					</div>
					<div className="tech-stack text-right">
						<ProjectTechList tech={tech} />
					</div>
					<ProjectCardButtons repoSrc={repoLink} liveSrc={liveLink} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default ProjectModal;
