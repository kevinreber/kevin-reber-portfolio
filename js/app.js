const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const overlay = document.getElementById('overlay');

//Change nav-bar shadow on scroll
$(window).scroll(() => {
  $('.navbar').toggleClass('scroll', $(this).scrollTop() > 10);
});

//Toggle nav
const navSlide = () => {
  nav.classList.toggle('nav-active');

  //Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
    }
  });

  //Burger Animation
  burger.classList.toggle('toggle');
}

burger.addEventListener('click', navSlide);

$(document).ready(() => {
  const sections = document.querySelectorAll('section');
  const hRs = document.querySelectorAll('hr');

  renderProjects();
  renderSkills();

  for (let section of sections) {
    section.classList.add('hidden', 'hide');
  }
  for (let hr of hRs) {
    hr.classList.add('hidden', 'hide');
  }

  $('.hero').addClass('hidden', 'hide')
});

// Remove Overlay after animation
window.setTimeout(() => {
  overlay.classList.add('hide');
}, 2500);

window.setTimeout(() => {
  overlay.style.display = 'none';
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

  $('.hero').removeClass('hidden');
  $('.hero').addClass('transition');
}, 3000);

// Display rest of site
window.setTimeout(() => {
  const sections = document.querySelectorAll('section');
  const hRs = document.querySelectorAll('hr');

  for (let section of sections) {
    section.classList.add('show');
  }
  for (let hr of hRs) {
    hr.classList.add('show');
  }

  $('.hero').addClass('show')
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
  const {
    checked
  } = toggleSwitch;
  if (checked) {
    localStorage.setItem('darkModeEnabled', true);
  } else {
    localStorage.removeItem('darkModeEnabled');
  }
  document.body.className = checked ? 'dark' : ''

})

function renderProjects() {
  const projects = document.getElementById('projects');
  let html = `
  <h3 class="section-heading">Projects</h3>
  <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
    ${new Project(projectDB.dashApp).buildCard()}
    ${new Project(projectDB.mastermind).buildCard()}
    ${new Project(projectDB.pokedex).buildCard()}
    ${new Project(projectDB.gameShow).buildCard()}
    ${new Project(projectDB.gallery).buildCard()}
    ${new Project(projectDB.tinDog).buildCard()}
  </div>
  `
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
  `
  skills.innerHTML = html;
}

const skillsDB = {
  design: {
    title: 'Design',
    skills: ['Figma', 'Photoshop', 'Illustrator', 'After Effects']
  },
  frontEnd: {
    title: 'Front End',
    skills: ['HTML', 'CSS | SASS', 'Javascript', 'jQuery']
  },
  server: {
    title: 'Server',
    skills: ['Python | Flask', 'NodeJS', 'Express']
  },
  data: {
    title: 'Data',
    skills: ['MySQL', 'MongoDB']
  }
}

class Skill {
  constructor(skill) {
    this.title = skill.title;
    this.skills = skill.skills;
  }

  buildCard() {
    let html = `
    <div class="col col-skill">
          <div class="card h-100 mb-3 card-skill">
            <div class="card-body">
              <h6 class="card-title">${this.title}</h6>
              <ul class="skill-container">
              ${this.buildList(this.skills)}
              </ul>
            </div>
          </div>
        </div>
    `;

    return html;
  }

  buildList(skills) {
    let html = '';

    for (let skill of skills) {
      html += `
        <li class="skill txt-2">${skill}</li>
      `
    }
    return html;
  }
}

const projectDB = {
  dashApp: {
    id: 1,
    name: 'Dashboard App',
    data: 'dashboard',
    image: 'dashboardApp.jpg',
    description: 'Dashboard Application that alerts user of notifications and uses charts to display tracking data.',
    tech: ['Chart.js', 'Grid & Flexbox', 'Sass'],
    repoLink: 'https://github.com/kevinreber/Dashboard-App',
    liveLink: 'https://kevinreber.github.io/Dashboard-App/'
  },
  mastermind: {
    id: 2,
    name: 'Mastermind',
    data: 'mastermind',
    image: 'mastermind.jpg',
    description: "Mastermind is a game where players have 10 attempts to guess the location of 4 numbers using Random.org's API.",
    tech: ['Axios', 'Sass', 'Random API'],
    repoLink: 'https://github.com/kevinreber/mastermind',
    liveLink: 'https://kevinreber.github.io/mastermind/',
    class: 'mastermind'
  },
  pokedex: {
    id: 3,
    name: 'Pokedex',
    data: 'pokedex',
    image: 'pokedex.jpg',
    description: "Pokedex with all the original 151 Pokemon. All Pokemon data is requested from the PokeAPI database using Javascript Promises.",
    tech: ['PokeAPI'],
    repoLink: 'https://github.com/kevinreber/PokeDex',
    liveLink: 'https://kevinreber.github.io/PokeDex/',
  },
  gameShow: {
    id: 4,
    name: 'Game Show',
    data: 'gameshow',
    image: 'gameShow.jpg',
    description: "Players have 5 attempts to guess a randomly generated phrase using a built-in interactive keyboard.",
    tech: ['Javascript', 'DOM'],
    repoLink: 'https://github.com/kevinreber/Game-Show',
    liveLink: 'https://kevinreber.github.io/Game-Show/',
  },
  gallery: {
    id: 5,
    name: 'Photo Gallery',
    data: 'gallery',
    image: 'imgGallery.jpg',
    description: "Interactive photo gallery built with JavaScript and jQuery plugins.",
    tech: ['jQuery', 'Lightbox Plugin'],
    repoLink: 'https://github.com/kevinreber/Photo-Gallery',
    liveLink: 'https://kevinreber.github.io/Photo-Gallery/',
  },
  tinDog: {
    id: 6,
    name: 'TinDog',
    data: 'tindog',
    image: 'tindog.jpg',
    description: "Online dating platform for dogs.",
    tech: ['Bootstrap'],
    repoLink: 'https://github.com/kevinreber/tindog',
    liveLink: 'https://kevinreber.github.io/tindog/',
  }

}

class Project {
  constructor(project) {
    this.id = project.id;
    this.name = project.name;
    this.data = project.data;
    this.image = project.image;
    this.description = project.description;
    this.tech = project.tech;
    this.repoLink = project.repoLink;
    this.liveLink = project.liveLink;
    this.class = project.class;
  }

  buildCard() {
    let html = `
    <!-- Project ${this.id} -->
    <div class="col mb-4">
      <div class="card h-100 project" data-project="${this.data}" data-toggle="modal" data-target="#${this.data}Modal">
        <div class="card-img-top">
          <img src="public/images/project demos/thumbnails/${this.image}" class="card-img ${this.class}" alt="${this.name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">${this.description}</p>
          <div class="tech-stack text-right">
            ${this.displayTech(this.tech)}
          </div>
          <div class="card-footer">
            <a href="${this.repoLink}" class="btn" target="_blank">Source
              Code</a>
            <a href="${this.liveLink}" class="btn" target="_blank">Live
              Demo</a>
          </div>
        </div>
      </div>
    </div><!-- /Project ${this.id} -->
    `;
    return html;
  }

  displayTech(tech) {
    let html = '';

    for (let i = 0; i < tech.length; i++) {
      html += `<p class="txt-2-project">${tech[i]}</p>`;
      /* Add a '|' to separate tech[i] if tech[i] is not last */
      if (i < tech.length - 1) {
        html += `<p class="txt-2-project">|</p>`;
      }
    }
    return html;
  }

}