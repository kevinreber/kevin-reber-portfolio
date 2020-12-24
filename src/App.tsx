import React, { useState } from 'react';

// components
import Overlay from './components/Overlay/Overlay';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectModal from './components/ProjectModal/ProjectModal';

import ProjectCardButtons from './components/ProjectCardButtons/ProjectCardButtons';
import ProjectTechList from './components/ProjectTechList/ProjectTechList';

// MUI
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

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

const CURR_PROJECT_INITIAL_STATE = {
	id: 0,
	name: '',
	data: '',
	image: '',
	gif: '',
	description: '',
	tech: [],
	repoLink: '',
	liveLink: '',
	clss: '',
};

function App() {
	const [currentProject, setCurrentProject] = useState(
		CURR_PROJECT_INITIAL_STATE
	);
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleOpen = (project: any) => {
		setCurrentProject(project);
		setShowModal(true);
	};

	const handleClose = () => {
		setShowModal(false);
	};
	return (
		<div className="App">
			{/* Overlay */}
			<div id="overlay">
				<Overlay />
			</div>

			{/* <!-- Navbar --> */}
			<section id="navbar">
				<Navbar />
			</section>

			{/* Modal  */}
			<Modal
				open={showModal}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description">
				<div className="modal-content">
					<div className="modal-gif">
						<img
							src={currentProject.gif}
							className={`modal-img ${currentProject.data}`}
							alt={currentProject.name}
						/>
					</div>
					<div className="modal-body">
						<div className="modal-header">
							<h5 className="modal-title card-title">{currentProject.name}</h5>
							<p className="modal-text card-text">
								{currentProject.description}
							</p>
						</div>
						<div className="tech-stack text-right">
							<ProjectTechList tech={currentProject.tech} />
						</div>
						<ProjectCardButtons
							repoSrc={currentProject.repoLink}
							liveSrc={currentProject.liveLink}
						/>
					</div>
				</div>
				{/* <ProjectModal
					id={currentProject.id}
					name={currentProject.name}
					data={currentProject.data}
					image={currentProject.image}
					gif={currentProject.gif}
					description={currentProject.description}
					tech={currentProject.tech}
					repoLink={currentProject.repoLink}
					liveLink={currentProject.liveLink}
				/> */}
			</Modal>

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
		</div>
	);
}

export default App;
