// Scroll animation
const animated=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(e=>{
e.forEach(i=>{if(i.isIntersecting)i.target.classList.add('visible');});
},{threshold:0.1});
animated.forEach(el=>observer.observe(el));

// Dark mode
const darkToggle=document.getElementById('darkModeToggle');
darkToggle.addEventListener('click',()=>{
const on=document.body.classList.toggle('dark-mode');
darkToggle.textContent=on?'☀️':'🌙';
});

// Only one audio plays
const audios=document.querySelectorAll("audio");
audios.forEach(a=>{
a.addEventListener("play",()=>{
audios.forEach(o=>{if(o!==a){o.pause();o.currentTime=0;}});
});
});

// Navbar highlight
const sections=document.querySelectorAll("section,header");
const links=document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(s=>{
if(scrollY>=s.offsetTop-120)current=s.id;
});
links.forEach(l=>{
l.classList.remove("active");
if(l.getAttribute("href")==="#"+current)l.classList.add("active");
});
});

// Hide CTA when contact visible
const contact=document.querySelector('#contact');
const cta=document.querySelector('.floating-cta');
const ctaObserver=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)cta.classList.add('hidden');
else cta.classList.remove('hidden');
});
},{threshold:0.35});
ctaObserver.observe(contact);
