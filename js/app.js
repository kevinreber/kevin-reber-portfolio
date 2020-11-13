const overlay = document.getElementById('overlay');

//Change nav-bar shadow on scroll
$(window).scroll(() => {
	$('.navbar').toggleClass('scroll', $(this).scrollTop() > 10);
});

//Toggle nav
const navSlide = () => {
	const nav = document.querySelector('.nav-links');
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelectorAll('.nav-links li');

	nav.classList.toggle('nav-active');

	//Animate Links
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${
				index / 7 + 0.3
			}s`;
		}
	});

	//Burger Animation
	burger.classList.toggle('toggle');
};

$(document).ready(() => {
	const sections = document.querySelectorAll('section');
	const hRs = document.querySelectorAll('hr');

	for (let section of sections) {
		section.classList.add('hidden', 'hide');
	}
	for (let hr of hRs) {
		hr.classList.add('hidden', 'hide');
	}
});

// Remove Overlay after animation
window.setTimeout(() => {
	overlay.classList.add('hide');
}, 2500);

// Removes overlay display and add transition effect to all sections on page
window.setTimeout(() => {
	overlay.style.display = 'none';

	// Renders all sections on page
	renderNavbar();
	renderHero();
	renderProjects();
	renderSkills();
	renderContact();
	renderFooter();
	renderModalHTML();

	const sections = document.querySelectorAll('section');
	const hRs = document.querySelectorAll('hr');

	for (let section of sections) {
		section.classList.remove('hidden');
		section.classList.add('transition');
	}
	for (let hr of hRs) {
		hr.classList.remove('hidden');
		hr.classList.add('transition');
	}

	// Event Listener for 'page slide' effect
	document.querySelector('.burger').addEventListener('click', navSlide);
}, 3000);

// Display rest of site with fade in effect
window.setTimeout(() => {
	const sections = document.querySelectorAll('section');
	const hRs = document.querySelectorAll('hr');

	for (let section of sections) {
		section.classList.add('show');
	}
	for (let hr of hRs) {
		hr.classList.add('show');
	}
}, 3200);

//TOGGLE SWITCH
const toggleSwitch = document.querySelector('input[type="checkbox"]');

// CHECK TO SEE IF DARK MODE ENABLED IS IN LOCAL STORAGE!
if (localStorage.getItem('darkModeEnabled')) {
	document.body.className = 'dark';
	toggleSwitch.checked = true;
}

// When we click the switch, update local storage & change the className on the body
toggleSwitch.addEventListener('click', function (e) {
	const { checked } = toggleSwitch;
	if (checked) {
		localStorage.setItem('darkModeEnabled', true);
	} else {
		localStorage.removeItem('darkModeEnabled');
	}
	document.body.className = checked ? 'dark' : '';
});

function renderProjects() {
	const projects = document.getElementById('projects');
	let html = `
  <h3 class="section-heading">Projects</h3>
  <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
  ${new Project(projectDB.pare).buildCard()}
    ${new Project(projectDB.stockFootage).buildCard()}
    ${new Project(projectDB.dashApp).buildCard()}
    ${new Project(projectDB.mastermind).buildCard()}
    ${new Project(projectDB.gameShow).buildCard()}
    ${new Project(projectDB.warbler).buildCard()}
  </div>
  `;
	projects.innerHTML = html;
}

function renderSkills() {
	const skills = document.getElementById('skills');
	let html = `
  <h3 class="section-heading">Skills</h3>
  <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
    ${new Skill(skillsDB.design).buildCard()}
    ${new Skill(skillsDB.frontEnd).buildCard()}
    ${new Skill(skillsDB.server).buildCard()}
    ${new Skill(skillsDB.data).buildCard()}
  </div>
  `;
	skills.innerHTML = html;
}

function renderNavbar() {
	const navbar = document.getElementById('navbar');
	let html = `
  <nav class="navbar navbar-expand-sm fixed-top">
          <a class="navbar-brand" href="#">
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" width="50" height="50">
              <title>Kevin Reber | Logo</title>
              <path class="cls-1 svg-elem-1"
                d="M51,6.16c0,.12,0,37.69,0,37.82V69.65c0,.06,0,.12,0,.23.09-.06.16-.08.2-.13a2.82,2.82,0,0,0,.18-.29l6.09-10.23a.4.4,0,0,1,.38-.25H76.76L77,59a2.32,2.32,0,0,1-.17.32l-6.42,11.4c-.75,1.34-1.5,2.68-2.27,4a.38.38,0,0,0,0,.46c.21.28.39.57.58.86q9.45,14.31,18.92,28.61c.38.57.75,1.15,1.12,1.72H68.31l-.2-.31-5-7.52L51.58,81.42l-.36-.53c-.06-.1-.12-.17-.26-.08v25.24c0,.11,0,.23,0,.34H34V14.74a72.93,72.93,0,0,0-23.75,93.72H88.75v1.46H11a72.93,72.93,0,0,0,101.94,27.34c-20.35-31-20.39-31.06-20.44-31.14L85.81,96Q79,85.74,72.27,75.5c-.27-.4-.16-.79-.19-1.21H82.7a13.33,13.33,0,0,0,2.44-.21,11.93,11.93,0,0,0,5.41-2.43,9,9,0,0,0,3.37-9.51,6.65,6.65,0,0,0-3.63-4.65,9.52,9.52,0,0,0-2.64-.87,15.33,15.33,0,0,0-3-.25H59.44l-.25,0,.2-.34Q63,49.91,66.57,43.84l.11-.23H91.4a.78.78,0,0,0,.21,0,31.17,31.17,0,0,1,4.83.53,24,24,0,0,1,5.63,1.73,16.9,16.9,0,0,1,9.39,10.39,21.29,21.29,0,0,1,1,4.87,22.39,22.39,0,0,1,0,4.63A16.15,16.15,0,0,1,111,71a18.52,18.52,0,0,1-4.86,6.27,25.7,25.7,0,0,1-9.35,5l-.44.14.17.28q4.35,6.75,8.71,13.5l6.42,10c0,.07.07.15,14,21.33A72.92,72.92,0,0,0,50.85,6.2">
              </path>
            </svg>
          </a>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul class="nav-links">
            <div class="nav-items">
              <li class="nav-item">
                <a class="nav-link" href="#skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li>
                <a class="nav-link" target="_blank" href="${resume}">Resume</a>
              </li>
            </div>
            <div class="nav-socials">
              <li>
                <div class="social-icons">
                  <a href="${socials.github}" target="_blank">
                    <i class="fa fa-github footer-social-icon"></i>
                  </a>
                  <a href="${socials.linkedin}" target="_blank">
                    <i class="fa fa-linkedin footer-social-icon"></i>
                  </a>
                  <a href="${socials.codepen}" target="_blank">
                    <i class="fa fa-codepen footer-social-icon"></i>
                  </a>
                  <a href="${socials.instagram}" target="_blank">
                    <i class="fa fa-instagram footer-social-icon"></i>
                  </a>
                  <a href="${socials.twitter}" target="_blank">
                    <i class="fa fa-twitter footer-social-icon"></i>
                  </a>
                </div>
              </li>
            </div>
          </ul>
        </nav>
  `;

	navbar.innerHTML = html;
}

function renderHero() {
	const hero = document.getElementById('hero');

	let html = `
    <div class="about-txt text-left">
      <h5><span class="about line-1">Hello, my name is</span><br>
        <span class="about line-2">Kevin Reber 👋</span><br>
        <span class="about line-3">I'm a self-taught developer with a passion to build & design. <br> Welcome to my
            portfolio website!</span><br>
        <hr>
        <span class="about line-4"></span></h5>
      <div class="social-icons hero-social-icons">
        <a href="${socials.github}" target="_blank">
          <i class="fa fas fa-xs fa-github hero-social-icon"></i>
        </a>
        <a href="${socials.linkedin}" target="_blank">
          <i class="fa fas fa-xs fa-linkedin hero-social-icon"></i>
        </a>
         <a href="${socials.codepen}" target="_blank">
          <i class="fa fas fa-xs fa-codepen hero-social-icon"></i>
        </a>
        <a href="${socials.instagram}" target="_blank">
          <i class="fa fas fa-xs fa-instagram hero-social-icon"></i>
        </a>
        <a href="${socials.twitter}" target="_blank">
          <i class="fa fas fa-xs fa-twitter hero-social-icon"></i>
        </a>
      </div>
    </div>
    <div class="about-btn">
      <a href="#projects" class="btn btn-hero">Projects</a>
      <a target="_blank" href="${resume}" class="btn btn-hero">Resume</a>
    </div>
  `;

	hero.innerHTML = html;
}

function renderContact() {
	const contact = document.getElementById('contact');

	let html = `
    <h3 id="contact-heading" class="section-heading">Get in Touch</h3>
    <div class="contact-content-container">
      <h5 class="contact-msg">I'm always looking for new opportunities to network and collab<br> with other talented
        engineers!</h5>
      <a class="btn btn-contact" href="mailto:kevinreber@berkeley.edu" target="_blank">Say Hello</a>
    </div>
    <div class="contact-content-container design-content-container">
      <h5 id="design-heading" class="contact-msg">Want to See My Design Work?</h5>
      <h5 class="contact-msg">Checkout my design portfolio <a class="links" href="https://www.kevinreber.net/" target="_blank">here!</a></h5>
    </div>
    
  </div>
  `;

	contact.innerHTML = html;
}

function renderFooter() {
	const footer = document.getElementById('footer');

	let html = `
    <div class="social-icons">
      <a href="${socials.github}" target="_blank">
        <i class="fa fa-github footer-social-icon"></i>
      </a>
      <a href="${socials.linkedin}" target="_blank">
        <i class="fa fa-linkedin footer-social-icon"></i>
      </a>
      <a href="${socials.codepen}" target="_blank">
        <i class="fa fa-codepen footer-social-icon"></i>
      </a>
      <a href="${socials.instagram}" target="_blank">
        <i class="fa fa-instagram footer-social-icon"></i>
      </a>
      <a href="${socials.twitter}" target="_blank">
        <i class="fa fa-twitter footer-social-icon"></i>
      </a>
    </div>
    <span class="footer-text">Designed & Built by Kevin Reber</span>
  `;

	footer.innerHTML = html;
}

function renderModalHTML() {
	const modals = document.getElementById('modals');
	let html = `
  ${new Project(projectDB.pare).buildModal()}
  ${new Project(projectDB.stockFootage).buildModal()}
  ${new Project(projectDB.dashApp).buildModal()}
  ${new Project(projectDB.mastermind).buildModal()}
  ${new Project(projectDB.gameShow).buildModal()}
  ${new Project(projectDB.warbler).buildModal()}
  `;

	modals.innerHTML = html;
}
