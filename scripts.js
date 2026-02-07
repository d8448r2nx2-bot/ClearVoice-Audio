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
  const offset = navHeight + 12; // breathing room
  window.scrollTo({ top: absoluteTop - offset, behavior: 'smooth' });
}

// Attach handler to nav links (prevent default jump) AND set active immediately
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // set active class immediately
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (target) scrollToWithOffset(target);
  });
});

// highlight active nav link based on scroll position (keeps it updated)
const sectionsForNav = Array.from(document.querySelectorAll('header[id], section[id]'));

function highlightCurrentNav() {
  const navH = navbar ? navbar.offsetHeight : 0;
  let currentId = sectionsForNav[0] ? sectionsForNav[0].id : null;
  sectionsForNav.forEach(s => {
    const top = s.getBoundingClientRect().top;
    if (top - navH - 20 <= 0) currentId = s.id;
  });

  navLinks.forEach(l => l.classList.remove('active'));
  if (currentId) {
    const activeLink = document.querySelector('.nav-link[href="#' + currentId + '"]');
    if (activeLink) activeLink.classList.add('active');
  }
}

window.addEventListener('scroll', highlightCurrentNav);
window.addEventListener('load', () => {
  // set initial scroll margin for sections (so anchor jumps don't hide headings)
  const navH = navbar ? navbar.offsetHeight : 0;
  document.querySelectorAll('header[id], section[id]').forEach(el=>{
    el.style.scrollMarginTop = (navH + 12) + 'px';
  });

  highlightCurrentNav();
});
window.addEventListener('resize', () => {
  document.querySelectorAll('header[id], section[id]').forEach(el=>{
    el.style.scrollMarginTop = (navbar.offsetHeight + 12) + 'px';
  });
  highlightCurrentNav();
});
