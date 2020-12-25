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

// Event Listener for 'page slide' effect
window.setTimeout(() => {
	document.querySelector('.burger').addEventListener('click', navSlide);
}, 3000);
