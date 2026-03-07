import React, { useCallback } from 'react';

import RESUME from '../../resume/Kevin_Reber_Resume.pdf';

const useRipple = () => {
	return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
		const btn = e.currentTarget;
		const rect = btn.getBoundingClientRect();
		const ripple = document.createElement('span');
		ripple.className = 'btn-ripple';
		ripple.style.left = `${e.clientX - rect.left - 10}px`;
		ripple.style.top = `${e.clientY - rect.top - 10}px`;
		btn.appendChild(ripple);
		setTimeout(() => ripple.remove(), 600);
	}, []);
};

const HeroButtons = () => {
	const handleRipple = useRipple();

	return (
		<>
			<a href="#projects" className="btn btn-hero" onClick={handleRipple}>
				Projects
			</a>
			<a
				className="btn btn-hero"
				target="_blank"
				rel="noopener noreferrer"
				href={RESUME}
				onClick={handleRipple}>
				Resume
			</a>
		</>
	);
};

export default HeroButtons;
