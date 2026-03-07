import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Props {
	skills: string[];
}

const SkillList: React.FC<Props> = ({ skills }) => {
	const { ref, isVisible } = useScrollReveal(0.2);

	return (
		<div ref={ref}>
			{skills.map((skill, index) => (
				<li
					key={skill}
					className="skill txt-2 skill-animated"
					style={{
						opacity: isVisible ? 1 : 0,
						transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
						transition: `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`,
					}}
				>
					<span className="skill-name">{skill}</span>
					<div className="skill-bar-container">
						<div
							className="skill-bar"
							style={{
								width: isVisible ? '100%' : '0%',
								transition: `width 0.8s ease ${index * 0.15 + 0.2}s`,
							}}
						/>
					</div>
				</li>
			))}
		</div>
	);
};

export default SkillList;
