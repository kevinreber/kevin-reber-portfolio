import React from 'react';

// components
import Logo from '../Logo/Logo';

// constants
import { SOCIALS, NAV_ITEMS } from '../../data';

// @ts-ignore
import RESUME from '../../resume/Kevin_Reber_Resume.pdf';

const Navbar = () => {
	const NavItemList = NAV_ITEMS.map((item) => (
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
				<a className="nav-link" href={`#${item.toLowerCase()}`}>
					{item}
				</a>
			)}
		</li>
	));

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
