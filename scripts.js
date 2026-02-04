// Scroll animation
const animated=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(e=>{
e.forEach(i=>{if(i.isIntersecting)i.target.classList.add('visible');});
},{threshold:0.1});
animated.forEach(el=>observer.observe(el));

// Dark mode
document.getElementById('darkModeToggle')
.addEventListener('click',()=>document.body.classList.toggle('dark-mode'));

// Only one audio plays
const audios=document.querySelectorAll("audio");
audios.forEach(a=>{
a.addEventListener("play",()=>{
audios.forEach(o=>{if(o!==a){o.pause();o.currentTime=0;}});
});
});

// Navbar highlight
const sections=document.querySelectorAll("section,header");
const links=document.querySelectorAll(".navbar a");
window.addEventListener("scroll",()=>{
let current="";
sections.forEach(s=>{
if(scrollY>=s.offsetTop-100)current=s.id;
});
links.forEach(l=>{
l.classList.remove("active");
if(l.getAttribute("href")==="#"+current)l.classList.add("active");
});
});
