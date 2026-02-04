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
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}


// 🎧 Nur ein Audio gleichzeitig
const audios = document.querySelectorAll("audio");

audios.forEach(audio => {
  audio.addEventListener("play", () => {
    audios.forEach(other => {
      if (other !== audio) {
        other.pause();
        other.currentTime = 0;
      }
    });
  });
});
