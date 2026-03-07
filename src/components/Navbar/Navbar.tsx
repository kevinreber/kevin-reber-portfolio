import React from 'react';

// components
import Logo from '../Logo/Logo';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

// hooks
import { useScrollSpy } from '../../hooks/useScrollSpy';

// constants
import { SOCIALS, NAV_ITEMS } from '../../data';

import RESUME from '../../resume/Kevin_Reber_Resume.pdf';

// TODO: Add 'blog' back when that section is uncommented
const SECTION_IDS = ['skills', 'projects', 'contributions', 'contact'];

const Navbar = () => {
	const activeId = useScrollSpy(SECTION_IDS);

	const NavItemList = NAV_ITEMS.map((item) => {
		const sectionId = item.toLowerCase();
		const isActive = activeId === sectionId;

		return (
			<li key={item} className="nav-item">
				{item === 'Resume' ? (
					<a
						className="nav-link"
						target="_blank"
						rel="noopener noreferrer"
						href={RESUME}>
						{item}
					</a>
				) : (
					<a
						className={`nav-link${isActive ? ' nav-link-active' : ''}`}
						href={`#${sectionId}`}>
						{item}
					</a>
				)}
			</li>
		);
	});

	const NavSocialItems = SOCIALS.map((social) => (
		<a key={social.id} href={social.src} target="_blank" rel="noreferrer">
			<i className={`fa fa-${social.id} footer-social-icon`}></i>
		</a>
	));

	return (
		<>
			<nav className="navbar navbar-expand-sm fixed-top">
				<a className="navbar-brand" href="#top">
					<Logo />
				</a>
				<ThemeToggle />
				<div className="burger">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
				<ul className="nav-links">
					<div className="nav-items">{NavItemList}</div>
					<div className="nav-socials">
						<li className="nav-item">
							<div className="social-icons">{NavSocialItems}</div>
						</li>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
