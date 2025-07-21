// Toggle the Projects dropdown on click
const dropdownBtn = document.getElementById("projectsDropdownBtn");
const dropdownMenu = document.getElementById("projectsDropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

var grid = document.querySelector('.grid');
var msnry = new Masonry(grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});
