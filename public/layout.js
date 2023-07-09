// Hide sections and overlay
// $(document).ready(() => {
// 	const sections = document.querySelectorAll('section');
// 	const hRs = document.querySelectorAll('hr');

// 	for (let section of sections) {
// 		section.classList.add('hidden', 'hide');
// 	}
// 	for (let hr of hRs) {
// 		hr.classList.add('hidden', 'hide');
// 	}
// });

// Remove Overlay after animation
window.setTimeout(() => {
  window.getElementById("overlay").classList.add("hide");
}, 2000);

// Removes overlay display and add transition effect to all sections on page
window.setTimeout(() => {
  window.getElementById("overlay").style.display = "none";

  const sections = window.querySelectorAll("section");
  const hRs = window.querySelectorAll("hr");

  for (let section of sections) {
    section.classList.remove("hidden");
    section.classList.add("transition");
  }
  for (let hr of hRs) {
    hr.classList.remove("hidden");
    hr.classList.add("transition");
  }
}, 2500);

// Display rest of site with fade in effect
window.setTimeout(() => {
  const sections = window.querySelectorAll("section");
  const hRs = window.querySelectorAll("hr");

  for (let section of sections) {
    section.classList.add("show");
  }
  for (let hr of hRs) {
    hr.classList.add("show");
  }
}, 2750);
