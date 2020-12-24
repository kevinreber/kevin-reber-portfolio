import React from 'react';

interface Props {
	tech: string[];
}

/**
 * Component builds list of technologies used for project.
 */
const ProjectTechList: React.FC<Props> = ({ tech = [] }) => {
	const n = tech.length;
	return (
		<>
			{tech.map((t, i) => (
				<span key={t} className="tech">
					<p className="txt-2-project">{t}</p>
					{/* Add a '|' to separate tech[i] if tech[i] is not last */}
					{i < n - 1 ? <p className="txt-2-project">|</p> : null}
				</span>
			))}
		</>
	);
};

export default ProjectTechList;
