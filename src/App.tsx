import React, { useState, useEffect } from "react";

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

// types
import { Project } from "./types";

// styles
import "./App.css";
import "./redesign.css";

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
};

function App() {
  const [currentProject, setCurrentProject] = useState(
    CURR_PROJECT_INITIAL_STATE
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  // Prebuild drops a demo URL that does not resolve, but a GIF can also go
  // missing after the build. This is the runtime half of the same fallback.
  const [gifError, setGifError] = useState<boolean>(false);
  const [overlayHide, setOverlayHide] = useState<boolean>(false);
  const [overlayDone, setOverlayDone] = useState<boolean>(false);
  const [contentVisible, setContentVisible] = useState<boolean>(false);

  useEffect(() => {
    // Fade out overlay after logo animation
    const hideTimer = setTimeout(() => setOverlayHide(true), 2000);
    // Remove overlay from layout and start content transition
    const doneTimer = setTimeout(() => {
      setOverlayDone(true);
      // Small delay before showing content for fade-in effect
      setTimeout(() => setContentVisible(true), 250);
    }, 2500);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const handleOpen = (project: Project) => {
    setCurrentProject(project);
    setGifError(false);
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
      {!overlayDone && (
        <div id="overlay" className={overlayHide ? "hide" : ""}>
          <Overlay />
        </div>
      )}

      {/* <!-- Navbar --> */}
      <section id="navbar" className={`transition ${contentVisible ? "show" : "hide"}`}>
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
            {(currentProject.gif || currentProject.image) && (
              <div className="modal-gif">
                <img
                  src={
                    gifError || !currentProject.gif
                      ? currentProject.image
                      : currentProject.gif
                  }
                  className={`modal-img ${currentProject.data}`}
                  alt={currentProject.name}
                  onError={() => setGifError(true)}
                />
              </div>
            )}
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
      <header id="hero" className={`hero text-sm-center container transition ${contentVisible ? "show" : "hide"}`}>
        <Hero />
      </header>

      <main className={`transition ${contentVisible ? "show" : "hide"}`}>
        {/* Projects  */}
        <section id="projects" className="container section-offset">
          <ScrollReveal>
            <Projects setModalProject={handleOpen} />
          </ScrollReveal>
        </section>

        <hr className="section-hr" />

        {/* Stack — a summary of the projects above, so it follows them */}
        <section id="stack" className="container section-offset">
          <ScrollReveal>
            <Skills />
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
      </main>

      {/* Footer  */}
      <footer id="footer" className={`container footer transition ${contentVisible ? "show" : "hide"}`}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
