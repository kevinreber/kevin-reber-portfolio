import React from 'react';

import { SOCIALS } from '../../data';

interface Props {
	variant: string;
}

const SocialIcons: React.FC<Props> = ({ variant }) => {
	const icons = SOCIALS.map((social) => (
		<a href={social.src} target="_blank">
			<i
				className={`fa fas fa-xs fa-${social.id} ${
					variant === 'hero' ? 'hero-social-icon' : 'footer-social-icon'
				}`}></i>
		</a>
	));

	return (
		<div
			className={`social-icons ${
				variant === 'hero' ? 'hero-social-icons' : null
			}`}>
			{icons}
		</div>
	);
};

export default SocialIcons;
