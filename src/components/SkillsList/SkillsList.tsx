import React from 'react';

// components
import SkillList from '../SkillList/SkillList';

// data
import { SKILLS } from '../../data';

const SkillsList: React.FC = () => (
	<React.Fragment>
		{SKILLS.map((type) => (
			<div key={type.title} className="col col-skill">
				<div className="card h-100 mb-3 card-skill">
					<div className="card-body">
						<h6 className="card-title">{type.title}</h6>
						<ul className="skill-container">
							<SkillList skills={type.skills} />
						</ul>
					</div>
				</div>
			</div>
		))}
	</React.Fragment>
);

export default SkillsList;
