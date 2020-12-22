import React from 'react';

// components
import Logo from '../Logo/Logo';

// constants
import { SOCIALS, NAV_ITEMS } from '../../data';

// @ts-ignore
import RESUME from '../../resume/Kevin_Reber_Resume.pdf';

const Navbar = () => {
	const NavItemList = NAV_ITEMS.map((item) => (
		<li className="nav-item">
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
		<a href={social.src} target="_blank">
			<i className={`fa fa-${social.id} footer-social-icon`}></i>
		</a>
	));

	return (
		<>
			<nav className="navbar navbar-expand-sm fixed-top">
				<a className="navbar-brand" href="#">
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
						{/* <ul> */}
						<div className="social-icons">{NavSocialItems}</div>
						{/* </ul> */}
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
