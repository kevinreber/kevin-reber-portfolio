import React from 'react';

interface Props {
	repoSrc: string;
	liveSrc: string;
}

const ProjectCardButtons: React.FC<Props> = ({
	repoSrc = '',
	liveSrc = '',
}) => {
	return (
		<div className="card-footer">
			{repoSrc !== '' ? (
				<a href={repoSrc} className="btn" target="_blank" rel="noreferrer">
					Source Code
				</a>
			) : null}
			{liveSrc !== '' ? (
				<a href={liveSrc} className="btn" target="_blank" rel="noreferrer">
					Live Demo
				</a>
			) : null}
		</div>
	);
};

export default ProjectCardButtons;
