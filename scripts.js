// Scroll reveal
const animated=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:0.15});
animated.forEach(el=>observer.observe(el));

// Dark mode
document.getElementById('darkModeToggle').onclick=()=>{
document.body.classList.toggle('dark-mode');
};

// Audio: stop others when playing
const audios=document.querySelectorAll("audio");
audios.forEach(a=>{
a.addEventListener("play",()=>{
audios.forEach(other=>{
if(other!==a) other.pause();
});
});
});
