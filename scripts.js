// Scroll reveal (smooth easing)
const animated = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
animated.forEach(el => observer.observe(el));

// Dark mode toggle (keeps background image intact)
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

// Floating CTA: hide when contact section is visible
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
