import React from 'react';

// components
import HeroButtons from '../HeroButtons/HeroButtons';
import SocialIcons from '../SocialIcons/SocialIcons';

import { ABOUT, MATE } from '../../data';

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
						{/* {ABOUT.aboutLine2} */}I am a{' '}
						<strong>Co-Founder &amp; Engineer</strong> of an ed-tech platform at{' '}
						<strong>U.C. Berkeley's SKYDECK</strong> accelerator program!
						<br />
						Currently helping students connect remotely, you can learn more{' '}
						<a className="links" href={MATE}>
							here
						</a>
						.{/* {ABOUT.aboutLine1} */}
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
