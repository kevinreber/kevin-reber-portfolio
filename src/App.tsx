import React, { useState } from "react";

// components
import Overlay from "./components/Overlay/Overlay";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import GitHubContributions from "./components/GitHubContributions/GitHubContributions";
// TODO: Uncomment when content is ready
// import BlogSection from "./components/BlogSection/BlogSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";

// MUI
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// styles
import "./App.css";

export interface Project {
  id: number;
  name: string;
  data: string;
  image: string;
  gif: string;
  description: string;
  tech: string[];
  repoLink: string;
  liveLink: string;
  clss?: string | null;
}

const CURR_PROJECT_INITIAL_STATE: Project = {
  id: 0,
  name: "",
  data: "",
  image: "",
  gif: "",
  description: "",
  tech: [],
  repoLink: "",
  liveLink: "",
  clss: "",
};

function App() {
  const [currentProject, setCurrentProject] = useState(
    CURR_PROJECT_INITIAL_STATE
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpen = (project: Project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setCurrentProject(CURR_PROJECT_INITIAL_STATE);
    setShowModal(false);
  };

  const n = currentProject.tech.length;
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
        aria-describedby="transition-modal-description"
      >
        <Fade in={showModal}>
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
                <h5 className="modal-title card-title">
                  {currentProject.name}
                </h5>
                <p className="modal-text card-text">
                  {currentProject.description}
                </p>
              </div>
              <div className="tech-stack text-right">
                {currentProject.tech.map((t, i) => (
                  <span key={t} className="tech">
                    <p className="txt-2-project">{t}</p>
                    {/* Add a '|' to separate tech[i] if tech[i] is not last */}
                    {i < n - 1 ? <p className="txt-2-project">|</p> : null}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                {currentProject.repoLink !== "" ? (
                  <a
                    href={currentProject.repoLink}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                ) : null}
                {currentProject.liveLink !== "" ? (
                  <a
                    href={currentProject.liveLink}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>

      {/* Hero  */}
      <section id="hero" className="hero text-sm-center container">
        <Hero />
      </section>

      {/* Skills  */}
      <section id="skills" className="container section-offset">
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
      </section>

      <hr className="section-hr" />

      {/* Projects  */}
      <section id="projects" className="container section-offset">
        <ScrollReveal>
          <Projects setModalProject={handleOpen} />
        </ScrollReveal>
      </section>

      <hr className="section-hr" />

      {/* GitHub Contributions */}
      <section id="contributions" className="container section-offset">
        <ScrollReveal>
          <GitHubContributions />
        </ScrollReveal>
      </section>

      {/* TODO: Uncomment "Blog" section when posts are published
      <hr className="section-hr" />
      <section id="blog" className="container section-offset">
        <ScrollReveal>
          <BlogSection />
        </ScrollReveal>
      </section>
      */}

      <hr className="section-hr" />

      {/* Contact  */}
      <section id="contact" className="container section-offset">
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </section>

      {/* Footer  */}
      <section id="footer" className="container footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
