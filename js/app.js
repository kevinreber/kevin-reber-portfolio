const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const overlay = document.getElementById('overlay');
const projects = document.querySelectorAll('#projects .project')

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


projects.forEach(project => {
  //project.addEventListener('click', displayProject);
  project.addEventListener('click', (e) => {
    const attr = this.getAttribute('data-project');
    console.log(attr);
    
  });
})



const displayProject = () => {

  const html = `

  <div class="modal-container">
    <div class="modal-body">
      <div class="modal-gif">
        <img src="" alt="">
      </div>
      <div class="modal-text">
        <div class="modal-text-header">
          <span>close modal</span>
          <h3>Project Name</h3>
          <p> brief description</p>
          <ul>
            <li>tech stack</li>
          </ul>
        </div>
        <div class="modal-text-footer">
            <a>buttons</a>
            <a>buttons</a>
        </div>
      </div>
    </div>
  </div>
`
  overlay.innerHTML = html;

}