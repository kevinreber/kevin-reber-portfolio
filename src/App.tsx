import React from "react";

// components
import Overlay from "./components/Overlay/Overlay";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import ProjectCardButtons from "./components/ProjectCardButtons/ProjectCardButtons";
import ProjectTechList from "./components/ProjectTechList/ProjectTechList";

// MUI
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

// styles
import "./App.css";

const CURR_PROJECT_INITIAL_STATE = {
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
  const [currentProject, setCurrentProject] = React.useState(
    CURR_PROJECT_INITIAL_STATE
  );
  const [showModal, setShowModal] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   window.setTimeout(() => {
  //     document.getElementById("overlay").classList.add("hide");
  //   }, 2000);

  //   // Removes overlay display and add transition effect to all sections on page
  //   window.setTimeout(() => {
  //     document.getElementById("overlay").style.display = "none";

  //     const sections = document.querySelectorAll("section");
  //     const hRs = document.querySelectorAll("hr");

  //     for (let section of sections) {
  //       section.classList.remove("hidden");
  //       section.classList.add("transition");
  //     }
  //     for (let hr of hRs) {
  //       hr.classList.remove("hidden");
  //       hr.classList.add("transition");
  //     }
  //   }, 2500);

  //   // Display rest of site with fade in effect
  //   window.setTimeout(() => {
  //     const sections = document.querySelectorAll("section");
  //     const hRs = document.querySelectorAll("hr");

  //     for (let section of sections) {
  //       section.classList.add("show");
  //     }
  //     for (let hr of hRs) {
  //       hr.classList.add("show");
  //     }
  //   }, 2750);
  // }, []);

  const handleOpen = (project: any) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setCurrentProject(CURR_PROJECT_INITIAL_STATE);
    setShowModal(false);
  };
  return (
    <div
      className='App'
      // style={{ position: "relative" }}
    >
      {/* Overlay */}
      <div id='overlay'>
        <Overlay />
      </div>

      {/* <!-- Navbar --> */}
      <section id='navbar' className='hidden hide'>
        <Navbar />
      </section>

      {/* <section
        id='buy-me-coffee'
        style={{ position: "fixed", right: "5%", bottom: "5%" }}
      >
        <div>
          <a href='https://www.buymeacoffee.com/kevinreber' target='_blank'>
            <img
              src='https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'
              alt='Buy Me A Coffee'
              height='41'
              width='174'
            />
          </a>
        </div>
      </section> */}

      {/* Modal  */}
      <Modal
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
      >
        <Fade in={showModal}>
          <div className='modal-content'>
            <div className='modal-gif'>
              <img
                src={currentProject.gif}
                className={`modal-img ${currentProject.data}`}
                alt={currentProject.name}
              />
            </div>
            <div className='modal-body'>
              <div className='modal-header'>
                <h5 className='modal-title card-title'>
                  {currentProject.name}
                </h5>
                <p className='modal-text card-text'>
                  {currentProject.description}
                </p>
              </div>
              <div className='tech-stack text-right'>
                <ProjectTechList tech={currentProject.tech} />
              </div>
              <ProjectCardButtons
                repoSrc={currentProject.repoLink}
                liveSrc={currentProject.liveLink}
              />
            </div>
          </div>
        </Fade>
      </Modal>

      {/* Hero  */}
      <section id='hero' className='hero text-sm-center container hidden hide'>
        <Hero />
      </section>

      {/* Skills  */}
      <section id='skills' className='container section-offset hidden hide'>
        <Skills />
      </section>

      <hr className='section-hr hidden hide' />

      {/* Projects  */}
      <section id='projects' className='container section-offset hidden hide'>
        <Projects setModalProject={handleOpen} />
      </section>

      <hr className='section-hr hidden hide' />

      {/* Contact  */}
      <section id='contact' className='container section-offset hidden hide'>
        <Contact />
      </section>

      {/* Footer  */}
      <section id='footer' className='container footer hidden hide'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
