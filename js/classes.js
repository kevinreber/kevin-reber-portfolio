const resume = 'public/images/resume/Kevin Reber-Resume-2020.pdf';

const socials = {
	github: 'https://github.com/kevinreber',
	linkedin: 'http://bit.ly/kevinreber-linkedin',
	codepen: 'https://codepen.io/kevinreber',
	instagram: 'https://www.instagram.com/kevin_reber/',
	twitter: 'https://twitter.com/k_reebz',
};

const projectDB = {
	mate: {
		id: 1,
		name: 'Mate (In Progress)',
		data: 'mate',
		image: 'mate.png',
		gif: 'mate.gif',
		description:
			'A platform to help students connect with each other and learn more about campus resources and events.',
		tech: ['React', 'Redux', 'NodeJS', 'Google Firebase'],
		repoLink: '',
		liveLink: '',
	},
	stockFootage: {
		id: 2,
		name: 'Stock Footage Automator',
		data: 'stockFootage',
		image: 'stock-footage.jpg',
		gif: 'stock-footage.gif',
		description:
			'Full-stack web application to help users manage and sell their stock footage to various stock footage agencies, such as ShutterStock, Pond5 and Adobe stock.',
		tech: ['Flask', 'Pandas', 'Google Cloud Platform'],
		repoLink: 'https://bit.ly/kevinreber-stock-footage-app',
		liveLink: 'https://bit.ly/3estscE',
	},
	dashApp: {
		id: 3,
		name: 'Dashboard App',
		data: 'dashboard',
		image: 'dashboardApp.jpg',
		gif: 'dashboard.gif',
		description:
			'Interactive dashboard using advanced web techniques including SVG graphics and Javascript-driven charts. Built with various UI components to promote interactivity and usability.',
		tech: ['Chart.js', 'Grid & Flexbox', 'Sass'],
		repoLink: 'http://bit.ly/kevinreber-code-dashapp',
		liveLink: 'https://kevinreber.github.io/Dashboard-App/',
	},
	mastermind: {
		id: 4,
		name: 'Mastermind',
		data: 'mastermind',
		image: 'mastermind.jpg',
		gif: 'mastermind.gif',
		description:
			"Game where player has 10 attempts to guess 4 randomly generated numbers using Random.org's API. Relies heavily on event handling and manipulating various DOM elements with vanilla Javascript.",
		tech: ['Axios', 'Sass', 'Random API'],
		repoLink: 'http://bit.ly/kevinreber-code-mastermind',
		liveLink: 'https://kevinreber.github.io/mastermind/',
		class: 'mastermind',
	},
	gameShow: {
		id: 5,
		name: 'Game Show',
		data: 'gameshow',
		image: 'gameShow.jpg',
		gif: 'gameshow.gif',
		description:
			'Players have 5 attempts to guess a randomly generated phrase using a built-in interactive keyboard.',
		tech: ['Javascript', 'DOM'],
		repoLink: 'http://bit.ly/kevinreber-code-gameshow',
		liveLink: 'https://kevinreber.github.io/Game-Show/',
	},
	warbler: {
		id: 6,
		name: 'Warbler',
		data: 'warbler',
		image: 'warbler.jpg',
		gif: 'warbler.gif',
		description: 'Full-stack Twitter clone built using Python technologies.',
		tech: ['Flask', 'WTForms', 'PostgresSQL'],
		repoLink: 'https://bit.ly/kevinreber-warbler',
		liveLink: '',
	},
};

const skillsDB = {
	design: {
		title: 'Design',
		skills: ['Figma', 'Photoshop', 'Illustrator', 'After Effects'],
	},
	frontEnd: {
		title: 'Front End',
		skills: ['HTML', 'CSS | SASS', 'Javascript | jQuery', 'React JS'],
	},
	server: {
		title: 'Server',
		skills: ['Python | Flask', 'NodeJS', 'Express'],
	},
	data: {
		title: 'Data',
		skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
	},
};

class Project {
	constructor(project) {
		this.id = project.id;
		this.name = project.name;
		this.data = project.data;
		this.image = project.image;
		this.gif = project.gif;
		this.description = project.description;
		this.tech = project.tech;
		this.repoLink = project.repoLink;
		this.liveLink = project.liveLink;
		this.class = project.class;
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

	buildCardButtons(repoLink = null, liveLink = null) {
		let repo = repoLink
			? `<a href="${repoLink}" class="btn" target="_blank">Source
    Code</a>`
			: '';

		let live = liveLink
			? `<a href="${liveLink}" class="btn" target="_blank">Live
    Demo</a>`
			: '';

		let html =
			repoLink || liveLink
				? `
    <div class="card-footer">
    ${repo}
    ${live}
    </div>
    `
				: '';

		return html;
	}

	buildCard() {
		let html = `
      <!-- Project ${this.id} -->
      <div class="col mb-4">
        <div class="card h-100 project" data-project="${
					this.data
				}" data-toggle="modal" data-target="#${this.data}Modal">
          <div class="card-img-top">
            <img src="public/images/project demos/thumbnails/${
							this.image
						}" class="card-img ${this.class}" alt="${this.name}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text">${this.description}</p>
            <div class="tech-stack text-right">
              ${this.displayTech(this.tech)}
            </div>
              ${this.buildCardButtons(this.repoLink, this.liveLink)}
          </div>
        </div>
      </div><!-- /Project ${this.id} -->
      `;
		return html;
	}

	// TODO: Finish build Modal
	buildModal() {
		let html = `
    <!-- Modal ${this.id} -->
      <div class="modal fade" id="${
				this.data
			}Modal" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-gif">
                <img src="public/images/project demos/gifs/${
									this.gif
								}" class="modal-img ${this.class}" alt="Dashboard App">
              </div>
              <div class="modal-body">
                <div class="modal-header">
                  <h5 class="modal-title card-title">${this.name}</h5>
                  <p class="modal-text card-text">${this.description}</p>
              <div class="tech-stack text-right">
                  ${this.displayTech(this.tech)}
                </div>
                </div>
                ${this.buildCardButtons(this.repoLink, this.liveLink)}
              </div>
            </div>
          </div>
        </div> <!-- /Modal ${this.id} -->
      `;

		return html;
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
        `;
		}
		return html;
	}
}
