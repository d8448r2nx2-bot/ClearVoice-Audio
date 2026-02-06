// Scroll animation
const animated = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

animated.forEach(el => observer.observe(el));

// Dark mode toggle: toggle class and update aria + icon
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  const on = document.body.classList.toggle('dark-mode');
  darkToggle.setAttribute('aria-pressed', on ? 'true' : 'false');
  darkToggle.textContent = on ? '☀️' : '🌙';
});

// Only one audio plays at a time
const audios = document.querySelectorAll("audio");
audios.forEach(a=>{
  a.addEventListener("play", ()=>{
    audios.forEach(o=>{
      if(o !== a){
        o.pause();
        o.currentTime = 0;
      }
    });
  });
});

// Navbar highlight (simple)
const sections = document.querySelectorAll("section, header");
const links = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach(l => {
    l.classList.remove("active");
    if (l.getAttribute("href") === "#" + current) l.classList.add("active");
  });
});

// Hide floating CTA when contact section is visible
const contact = document.querySelector('#contact');
const cta = document.querySelector('.floating-cta');
if (contact && cta) {
  const ctaObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        cta.classList.add('hidden');
      } else {
        cta.classList.remove('hidden');
      }
    });
  }, { threshold: 0.35 });
  ctaObserver.observe(contact);
}
