// Scroll Animation
const animated = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

animated.forEach(el => observer.observe(el));


// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// 🎧 Audio: nur ein Player gleichzeitig
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
  audio.addEvent
