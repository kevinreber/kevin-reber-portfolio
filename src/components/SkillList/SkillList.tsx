import React from 'react';

interface Props {
	skills: string[];
}

const SkillList: React.FC<Props> = ({ skills }) => (
	<React.Fragment>
		{skills.map((skill) => (
			<li key={skill} className="skill txt-2">
				{skill}
			</li>
		))}
	</React.Fragment>
);

export default SkillList;
