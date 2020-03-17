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
  }
  for (let hr of hRs) {
    hr.classList.remove('hidden');
  }

  $('.hero').removeClass('hidden')
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

// projects.forEach(project => {
//   project.addEventListener('click', () => {
//     const dataProject = project.dataset.project;
//     console.log(data);  
//   });
// })

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