import React from 'react';

// components
import HeroButtons from '../HeroButtons/HeroButtons';

import { SOCIALS, ABOUT } from '../../data';

const Hero = () => {
	const SocialIcons = SOCIALS.map((social) => (
		<a href={social.src} target="_blank">
			<i className={`fa fas fa-xs fa-${social.id} hero-social-icon`}></i>
		</a>
	));

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
				<div className="social-icons hero-social-icons">{SocialIcons}</div>
			</div>
			<div className="about-btn">
				<HeroButtons />
			</div>
		</>
	);
};

export default Hero;
