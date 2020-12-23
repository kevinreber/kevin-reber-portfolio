import React from 'react';

// @ts-ignore
import RESUME from '../../resume/Kevin_Reber_Resume.pdf';

const HeroButtons = () => {
	return (
		<>
			<a href="#projects" className="btn btn-hero">
				Projects
			</a>
			<a
				className="btn btn-hero"
				target="_blank"
				rel="noopener noreferrer"
				href={RESUME}>
				Resume
			</a>
		</>
	);
};

export default HeroButtons;
