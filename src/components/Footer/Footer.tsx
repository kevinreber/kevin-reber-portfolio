import React from 'react';

// components
import SocialIcons from '../SocialIcons/SocialIcons';
import { SOCIALS } from '../../data';

const Footer: React.FC = () => {
	const linkedIn = SOCIALS[1]['src'];
	return (
		<>
			<SocialIcons variant="footer" />
			<span className="footer-text">
				Designed & Built by{' '}
				<a className="links" target="_blank" href={linkedIn} rel="noreferrer">
					Kevin Reber
				</a>
			</span>
		</>
	);
};

export default Footer;
