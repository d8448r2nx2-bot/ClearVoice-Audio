// Smooth reveal observer
const animated = document.querySelectorAll('.animate');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
animated.forEach(el => revealObserver.observe(el));

// Dark mode toggle (icon toggles between moon & sun)
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  const isOn = document.body.classList.toggle('dark-mode');
  darkToggle.textContent = isOn ? '☀️' : '🌙';
  darkToggle.setAttribute('aria-pressed', isOn ? 'true' : 'false');
});

// Ensure only one audio plays at a time
const audios = document.querySelectorAll('audio');
audios.forEach(a => {
  a.addEventListener('play', () => {
    audios.forEach(o => {
      if (o !== a) {
        o.pause();
        o.currentTime = 0;
      }
    });
  });
});

// Floating CTA hide when contact visible
const cta = document.getElementById('floatingCTA');
const contactSection = document.getElementById('contact');
if (cta && contactSection) {
  const ctaObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      cta.classList.toggle('hidden', e.isIntersecting);
    });
  }, { threshold: 0.35 });
  ctaObs.observe(contactSection);
}

// NAVIGATION: smooth scroll with offset to avoid header overlap
const navbar = document.getElementById('siteNavbar');
const navLinks = document.querySelectorAll('.nav-link');

function scrollToWithOffset(targetEl) {
  const navHeight = navbar ? navbar.offsetHeight : 0;
  const rect = targetEl.getBoundingClientRect();
  const absoluteTop = window.pageYOffset + rect.top;
  const offset = navHeight + 12; // small breathing room
  window.scrollTo({ top: absoluteTop - offset, behavior: 'smooth' });
}

// Attach handler to nav links (prevent default jump)
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (target) scrollToWithOffset(target);
  });
});

// In case user navigates to anchors (page load with hash), adjust scroll-margin-top dynamically
function updateScrollMargin() {
  const navH = navbar ? navbar.offsetHeight : 0;
  const elems = document.querySelectorAll('header, section');
  elems.forEach(el => {
    el.style.scrollMarginTop = (navH + 12) + 'px';
  });
}
window.addEventListener('load', updateScrollMargin);
window.addEventListener('resize', updateScrollMargin);
