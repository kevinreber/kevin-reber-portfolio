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




/*
  <!-- Project 1 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="dashboard" data-toggle="modal" data-target="#dashboardModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/dashboardApp.jpg" class="card-img" alt="Dashboard App">
      </div>
      <div class="card-body">
        <h5 class="card-title">Dashboard App</h5>
        <p class="card-text">Dashboard Application that alerts user of notifications and uses charts to display
          tracking data.</p>
        <div class="tech-stack text-right">
          <p class="txt-2-project">Chart.js</p>
          <p class="txt-2-project">|</p>
          <p class="txt-2-project">Grid & Flexbox</p>
          <p class="txt-2-project">|</p>
          <p class="txt-2-project">Sass</p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/Dashboard-App" class="btn" target="_blank">Source
            Code</a>
          <a href="https://kevinreber.github.io/Dashboard-App/" class="btn" target="_blank">Live
            Demo</a>
        </div>
      </div>
    </div>
  </div><!-- /Project 1 -->

  <!-- Project 2 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="mastermind" data-toggle="modal" data-target="#mastermindModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/mastermind.jpg" class="card-img mastermind"
          alt="Mastermind">
      </div>
      <div class="card-body">
        <h5 class="card-title">Mastermind</h5>
        <p class="card-text">Mastermind is a game where players have 10 attempts to guess the location of 4
          numbers using Random.org's API.</p>
        <div class="tech-stack text-right">
          <p class="txt-2-project">Axios</p>
          <p class="txt-2-project">|</p>
          <p class="txt-2-project">Sass</p>
          <p class="txt-2-project">|</p>
          <p class="txt-2-project">Random API</p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/mastermind" class="btn" target="_blank">Source
            Code</a>
          <a href="https://kevinreber.github.io/mastermind/" class="btn" target="_blank">Live
            Demo</a>
        </div>
      </div>
    </div><!-- /Project 2 -->
  </div>

  <!-- Project 3 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="pokedex" data-toggle="modal" data-target="#pokedexModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/pokedex.jpg" class="card-img" alt="Pokedex">
      </div>
      <div class="card-body">
        <h5 class="card-title">Pokedex</h5>
        <p class="card-text">Pokedex with all the original 151 Pokemon. All Pokemon data is requested
          from the PokeAPI database using Javascript Promises.</p>
        <div class="tech-stack text-right">
          <p class="txt-2-project">PokeAPI</p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/PokeDex" class="btn" target="_blank">Source Code</a>
          <a href="https://kevinreber.github.io/PokeDex/" class="btn" target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  </div><!-- /Project 3 -->

  <!-- Project 4 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="gameshow" data-toggle="modal" data-target="#gameshowModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/gameShow.jpg" class="card-img" alt="Game Show">
      </div>
      <div class="card-body">
        <h5 class="card-title">Game Show</h5>
        <p class="card-text">Players have 5 attempts to guess a randomly generated phrase using a built-in
          interactive
          keyboard.</p>
        <div class="tech-stack text-right">
          <p class="txt-2-project">Javascript</p>
          <p class="txt-2-project">|</p>
          <p class="txt-2-project">DOM</p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/Game-Show" class="btn" target="_blank">Source
            Code</a>
          <a href="https://kevinreber.github.io/Game-Show/" class="btn" target="_blank">Live Demo</a>
        </div>
      </div>
    </div><!-- /Project 4 -->
  </div>

  <!-- Project 5 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="gallery" data-toggle="modal" data-target="#galleryModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/imgGallery.jpg" class="card-img" alt="Photo Gallery">
      </div>
      <div class="card-body">
        <h5 class="card-title">Photo Gallery</h5>
        <p class="card-text">Interactive photo gallery built with JavaScript and jQuery plugins.</p>
        <div class="tech-stack text-right">
          <div class="tech-stack text-right">
            <p class="txt-2-project">jQuery</p>
            <p class="txt-2-project">|</p>
            <p class="txt-2-project">Lightbox Plugin</p>
          </div>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/Photo-Gallery" class="btn" target="_blank">Source
            Code</a>
          <a href="https://kevinreber.github.io/Photo-Gallery/" class="btn" target="_blank">Live
            Demo</a>
        </div>
      </div>
    </div>
  </div><!-- /Project 5 -->

  <!-- Project 6 -->
  <div class="col mb-4">
    <div class="card h-100 project" data-project="tindog" data-toggle="modal" data-target="#tindogModal">
      <div class="card-img-top">
        <img src="public/images/project demos/thumbnails/tindog.jpg" class="card-img" alt="TinDog">
      </div>
      <div class="card-body">
        <h5 class="card-title">TinDog</h5>
        <p class="card-text">Online dating platform for dogs.</p>
        <div class="tech-stack text-right">
          <p class="txt-2-project">Bootstrap</p>
        </div>
        <div class="card-footer">
          <a href="https://github.com/kevinreber/tindog" class="btn" target="_blank">Source
            Code</a>
          <a href="https://kevinreber.github.io/tindog/" class="btn" target="_blank">Live Demo</a>
        </div>
      </div>
    </div>
  </div><!-- /Project 6 -->
</div>
*/