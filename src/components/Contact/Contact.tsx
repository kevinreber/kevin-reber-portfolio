import React from 'react';

import { DESIGN_PORTFOLIO } from '../../data';

const Contact: React.FC = () => {
	return (
		<>
			<h3 id="contact-heading" className="section-heading">
				Get in Touch
			</h3>
			<div className="contact-content-container">
				<h5 className="contact-msg">
					I'm always looking for new opportunities to network and collab
					<br /> with other talented engineers!
				</h5>
				<a
					className="btn btn-contact"
					href="mailto:kevinreber@berkeley.edu"
					target="_blank">
					Say Hello
				</a>
			</div>
			<div className="contact-content-container design-content-container">
				<h5 id="design-heading" className="contact-msg">
					Want to See My Design Work?
				</h5>
				<h5 className="contact-msg">
					Checkout my design portfolio
					<a className="links" href={DESIGN_PORTFOLIO} target="_blank">
						here!
					</a>
				</h5>
			</div>
		</>
	);
};

export default Contact;
