import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Props {
	children: React.ReactNode;
	direction?: 'up' | 'left' | 'right';
	delay?: number;
}

const ScrollReveal: React.FC<Props> = ({ children, direction = 'up', delay = 0 }) => {
	const { ref, isVisible } = useScrollReveal(0.1);

	const transforms: Record<string, string> = {
		up: 'translateY(40px)',
		left: 'translateX(-40px)',
		right: 'translateX(40px)',
	};

	return (
		<div
			ref={ref}
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? 'translate(0)' : transforms[direction],
				transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
			}}
		>
			{children}
		</div>
	);
};

export default ScrollReveal;
