import React from 'react';

// components
import HeroButtons from '../HeroButtons/HeroButtons';
import SocialIcons from '../SocialIcons/SocialIcons';

import { ABOUT } from '../../data';

const Hero: React.FC = () => {
	return (
		<>
			<div className="about-txt text-left">
				<h5>
					<span className="about line-1">{ABOUT.greeting}</span>
					<br />
					<span className="about line-2">{ABOUT.subGreeting}</span>
					<br />
					<span className="about line-3">
						{ABOUT.aboutLine1}
						<br />
						{ABOUT.aboutLine2}
					</span>
					<br />
					<hr />
					<span className="about line-4"></span>
				</h5>
				<SocialIcons variant="hero" />
			</div>
			<div className="about-btn">
				<HeroButtons />
			</div>
		</>
	);
};

export default Hero;
