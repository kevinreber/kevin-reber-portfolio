export const NAV_ITEMS = ['Skills', 'Projects', 'Contact', 'Resume'];

export const DESIGN_PORTFOLIO = 'https://www.kevinreber.net/';

export const MATE = 'http://mateapp.us/';

export const SOCIALS = [
	{ id: 'github', src: 'https://github.com/kevinreber' },
	{ id: 'linkedin', src: 'http://bit.ly/kevinreber-linkedin' },
	{ id: 'codepen', src: 'https://codepen.io/kevinreber' },
	{ id: 'instagram', src: 'https://www.instagram.com/k_reebz/' },
	{ id: 'twitter', src: 'https://twitter.com/k_reebz' },
];

export const ABOUT = {
	greeting: 'Hello World, my name is',
	subGreeting: 'Kevin Reber 👋',
	aboutLine1: "I'm a self-taught developer with a passion to build & design.",
	aboutLine2: 'Co-Founder of an ed-tech platform @ Berkeley Skydeck!',
};

const THUMB_SRC =
	'https://github.com/kevinreber/kevin-reber-portfolio/blob/master/archives/public/images/project%20demos/thumbnails';

const GIF_SRC = 'https://media.giphy.com/media';

export const PROJECTS = [
	{
		id: 1,
		name: 'Student Networking Platform',
		data: 'pare',
		image: `${THUMB_SRC}/pare-fs.jpg`,
		gif: `${GIF_SRC}/splNgXYOLuVWzfBcfF/source.gif`,
		description:
			'A platform to help college students connect with each other and learn more about campus resources and events.',
		tech: ['React', 'Redux', 'Material UI', 'Firebase', 'TypeScript'],
		repoLink: 'https://github.com/kevinreber/pare',
		liveLink: 'https://pare-afb7e.web.app/login',
		clss: '',
	},
	{
		id: 2,
		name: 'Stock Footage Manager',
		data: 'stockFootage',
		image: `${THUMB_SRC}/stock-footage.jpg`,
		gif: `${GIF_SRC}/xqw6X7FFtZrmuIe1Di/source.gif`,
		description:
			'Full-stack web application to help users manage and sell their stock footage to various stock footage agencies, such as ShutterStock, Pond5 and Adobe stock.',
		tech: ['Flask', 'Pandas', 'Google Cloud Platform'],
		repoLink: 'https://bit.ly/kevinreber-stock-footage-app',
		liveLink: 'https://bit.ly/3estscE',
		clss: '',
	},
	{
		id: 3,
		name: 'Repo Land',
		data: 'repo-land',
		image: `${THUMB_SRC}/repo-land.jpg`,
		gif: `${GIF_SRC}/PpMHgwZmlfCn5Ut6Zz/source.gif`,
		description:
			"Welcome to Repo Land! View all of your favorite organization's github repositories and latest contributions!",
		tech: ['React', 'Twitter Bootstrap', 'Github API'],
		repoLink: 'https://github.com/kevinreber/repo-land',
		liveLink: 'https://suspicious-knuth-590f2a.netlify.app/',
		clss: '',
	},
	{
		id: 4,
		name: 'Mastermind',
		data: 'mastermind',
		image: `${THUMB_SRC}/mastermind.jpg`,
		gif: `${GIF_SRC}/8tLVeXyfuiA5Txc124/source.gif`,
		description:
			"Game where player has 10 attempts to guess 4 randomly generated numbers using Random.org's API. Relies heavily on event handling and manipulating various DOM elements with vanilla Javascript.",
		tech: ['Axios', 'Sass', 'Random API'],
		repoLink: 'http://bit.ly/kevinreber-code-mastermind',
		liveLink: 'https://kevinreber.github.io/mastermind/',
		clss: '',
	},
	{
		id: 5,
		name: 'Dream Jobs',
		data: 'dream-jobs',
		image: `${THUMB_SRC}/dream-jobs.jpg`,
		gif: `${GIF_SRC}/IivpuVQP4IMTwTf7GV/source.gif`,
		description:
			'Looking for a new career? Checkout exciting new opportunities on Dream Jobs!',
		tech: ['React', 'Node.JS', 'PostgreSQL', 'Netlify'],
		repoLink: 'https://github.com/kevinreber/react-jobly',
		liveLink: 'https://gallant-leakey-b85924.netlify.app/login',
		clss: '',
	},
	{
		id: 6,
		name: 'Warbler',
		data: 'warbler',
		image: `${THUMB_SRC}/warbler.jpg`,
		gif: `${GIF_SRC}/qMqkMna8HeLs0QdOMe/source.gif`,
		description: 'Full-stack Twitter clone built using Python technologies.',
		tech: ['Flask', 'WTForms', 'PostgreSQL'],
		repoLink: 'https://bit.ly/kevinreber-warbler',
		liveLink: '',
		clss: '',
	},
];

export const SKILLS = [
	{
		title: 'Design',
		skills: ['Figma', 'Photoshop', 'Illustrator', 'After Effects'],
	},
	{
		title: 'Front End',
		skills: [
			'HTML',
			'CSS | SASS',
			'Javascript | TypeScript',
			'React JS | jQuery',
		],
	},
	{
		title: 'Server',
		skills: ['Python | Flask', 'NodeJS', 'Express'],
	},
	{
		title: 'Data',
		skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'],
	},
];
