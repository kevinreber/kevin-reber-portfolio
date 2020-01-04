const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const overlay = document.getElementById('overlay');
// const projects = document.querySelectorAll('.project')

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


// projects.forEach(project => {
//   project.addEventListener('click', () => {
//     const dataProject = project.dataset.project;
//     console.log(data);  
//   });
// })