import React from 'react';

// components
import SkillsList from '../SkillsList/SkillsList';

const Skills: React.FC = () => {
	return (
		<>
			<h3 className="section-heading">Skills</h3>
			<div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
				<SkillsList />
			</div>
		</>
	);
};

export default Skills;
