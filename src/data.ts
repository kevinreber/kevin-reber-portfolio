export const NAV_ITEMS = ['Skills', 'Projects', 'Contact', 'Resume'];

export const SOCIALS = [
	{ id: 'github', src: 'https://github.com/kevinreber' },
	{ id: 'linkedin', src: 'http://bit.ly/kevinreber-linkedin' },
	{ id: 'codepen', src: 'https://codepen.io/kevinreber' },
	{ id: 'instagram', src: 'https://www.instagram.com/kevin_reber/' },
	{ id: 'twitter', src: 'https://twitter.com/k_reebz' },
];

export const ABOUT = {
	greeting: 'Hello World, my name is',
	subGreeting: 'Kevin Reber 👋',
	aboutLine1: "I'm a self-taught developer with a passion to build & design.",
	aboutLine2: 'Welcome to my portfolio website!',
};

export const projectDB = {
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

export const skillsDB = {
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
