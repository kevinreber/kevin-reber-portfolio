const resume = 'public/images/resume/Kevin_Reber_Resume.pdf';

const socials = {
	github: 'https://github.com/kevinreber',
	linkedin: 'http://bit.ly/kevinreber-linkedin',
	codepen: 'https://codepen.io/kevinreber',
	instagram: 'https://www.instagram.com/kevin_reber/',
	twitter: 'https://twitter.com/k_reebz',
};

const projectDB = {
	pare: {
		id: 1,
		name: 'Student Networking Platform',
		data: 'pare',
		image: 'pare.jpg',
		gif: 'pare.gif',
		description:
			'Welcome to Pare! A platform to help college students connect with each other and learn more about campus resources and events.',
		tech: ['React', 'Redux', 'Material UI', 'Firebase', 'Live Chat'],
		repoLink: 'https://github.com/kevinreber/pare',
		liveLink: 'https://pare-afb7e.web.app/login',
	},
	stockFootage: {
		id: 2,
		name: 'Stock Footage Manager',
		data: 'stockFootage',
		image: 'stock-footage.jpg',
		gif: 'stock-footage.gif',
		description:
			'Full-stack web application to help users manage and sell their stock footage to various stock footage agencies, such as ShutterStock, Pond5 and Adobe stock.',
		tech: ['Flask', 'Pandas', 'Google Cloud Platform'],
		repoLink: 'https://bit.ly/kevinreber-stock-footage-app',
		liveLink: 'https://bit.ly/3estscE',
	},
	repoLand: {
		id: 3,
		name: 'Repo Land',
		data: 'repo-land',
		image: 'repo-land.jpg',
		gif: 'repo-land.gif',
		description:
			"Welcome to Repo Land! View all of your favorite organization's github repositories and latest contributions!",
		tech: ['React', 'Twitter Bootstrap', 'Github API'],
		repoLink: 'https://github.com/kevinreber/repo-land',
		liveLink: 'https://suspicious-knuth-590f2a.netlify.app/',
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
	dreamJobs: {
		id: 5,
		name: 'Dream Jobs',
		data: 'dream-jobs',
		image: 'dream-jobs.jpg',
		gif: 'dream-jobs.gif',
		description:
			'Looking for a new career? Checkout exciting new opportunities on Dream Jobs!',
		tech: ['React', 'Node.JS', 'PostgreSQL', 'Netlify'],
		repoLink: 'https://github.com/kevinreber/react-jobly',
		liveLink: 'https://gallant-leakey-b85924.netlify.app/login',
	},
	warbler: {
		id: 6,
		name: 'Warbler',
		data: 'warbler',
		image: 'warbler.jpg',
		gif: 'warbler.gif',
		description: 'Full-stack Twitter clone built using Python technologies.',
		tech: ['Flask', 'WTForms', 'PostgreSQL'],
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
                <img class="${
									this.data
								}" src="public/images/project demos/gifs/${
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
