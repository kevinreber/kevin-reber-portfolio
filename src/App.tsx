import React, { useState } from 'react';

// components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// MUI
import Modal from '@material-ui/core/Modal';

// styles
import './App.css';

interface Project {
	id: number;
	name: string;
	data: string;
	image: string;
	gif: string;
	description: string;
	tech: [];
	repoLink: string;
	liveLink: string;
	clss?: string | null;
}

// const CURR_PROJECT_INITIAL_STATE = {
// 	id: 0,
// 	name: '',
// 	data: '',
// 	image: '',
// 	gif: '',
// 	description: '',
// 	tech: [],
// 	repoLink: '',
// 	liveLink: '',
// 	clss: '',
// };

function App() {
	const [currentProject, setCurrentProject] = useState<object | null>(null);
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleOpen = (project: object) => {
		setCurrentProject(project);
		setShowModal(true);
		console.log(showModal, currentProject);
	};

	const handleClose = () => {
		setShowModal(false);
	};
	return (
		<div className="App">
			{/* Overlay */}
			{/* <div id="overlay">
				<div className="overlay-container">
					<svg
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 150 150"
						width="300"
						height="300">
						<title>Kevin Reber | Logo</title>
						<path
							id="logo-animation"
							className="cls-1 svg-elem-1 overlay-svg"
							d="M51,6.16c0,.12,0,37.69,0,37.82V69.65c0,.06,0,.12,0,.23.09-.06.16-.08.2-.13a2.82,2.82,0,0,0,.18-.29l6.09-10.23a.4.4,0,0,1,.38-.25H76.76L77,59a2.32,2.32,0,0,1-.17.32l-6.42,11.4c-.75,1.34-1.5,2.68-2.27,4a.38.38,0,0,0,0,.46c.21.28.39.57.58.86q9.45,14.31,18.92,28.61c.38.57.75,1.15,1.12,1.72H68.31l-.2-.31-5-7.52L51.58,81.42l-.36-.53c-.06-.1-.12-.17-.26-.08v25.24c0,.11,0,.23,0,.34H34V14.74a72.93,72.93,0,0,0-23.75,93.72H88.75v1.46H11a72.93,72.93,0,0,0,101.94,27.34c-20.35-31-20.39-31.06-20.44-31.14L85.81,96Q79,85.74,72.27,75.5c-.27-.4-.16-.79-.19-1.21H82.7a13.33,13.33,0,0,0,2.44-.21,11.93,11.93,0,0,0,5.41-2.43,9,9,0,0,0,3.37-9.51,6.65,6.65,0,0,0-3.63-4.65,9.52,9.52,0,0,0-2.64-.87,15.33,15.33,0,0,0-3-.25H59.44l-.25,0,.2-.34Q63,49.91,66.57,43.84l.11-.23H91.4a.78.78,0,0,0,.21,0,31.17,31.17,0,0,1,4.83.53,24,24,0,0,1,5.63,1.73,16.9,16.9,0,0,1,9.39,10.39,21.29,21.29,0,0,1,1,4.87,22.39,22.39,0,0,1,0,4.63A16.15,16.15,0,0,1,111,71a18.52,18.52,0,0,1-4.86,6.27,25.7,25.7,0,0,1-9.35,5l-.44.14.17.28q4.35,6.75,8.71,13.5l6.42,10c0,.07.07.15,14,21.33A72.92,72.92,0,0,0,50.85,6.2"></path>
					</svg>
				</div>
			</div> */}

			{/* <!-- Navbar --> */}
			<section id="navbar">
				<Navbar />
			</section>

			{/* Hero  */}
			<section id="hero" className="hero text-sm-center container">
				<Hero />
			</section>

			{/* Skills  */}
			<section id="skills" className="container section-offset">
				<Skills />
			</section>

			<hr className="section-hr" />

			{/* Projects  */}
			<section id="projects" className="container section-offset">
				<Projects setModalProject={handleOpen} />
			</section>

			<hr className="section-hr" />

			{/* Contact  */}
			<section id="contact" className="container section-offset">
				<Contact />
			</section>

			{/* Footer  */}
			<section id="footer" className="container footer">
				<Footer />
			</section>

			{/* Modals  */}
			<section id="modals"></section>
		</div>
	);
}

export default App;
