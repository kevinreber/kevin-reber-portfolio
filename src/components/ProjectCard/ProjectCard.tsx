import React from 'react';

interface Props {
	data: string;
	name: string;
	description: string;
	image: string;
	tech: string[];
	repoSrc: string;
	liveSrc: string;
	clss?: string | null;
}

const ProjectCard: React.FC<Props> = ({
	data,
	name,
	description,
	image,
	tech,
	repoSrc,
	liveSrc,
	clss,
}) => {
	console.log(image);

	return (
		<div className="col mb-4">
			<div
				className="card h-100 project"
				data-project={data}
				data-toggle="modal"
				data-target={`#${data}Modal`}>
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
						{/* ${this.displayTech(this.tech)} */}
					</div>
					{/* ${this.buildCardButtons(this.repoLink, this.liveLink)} */}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
