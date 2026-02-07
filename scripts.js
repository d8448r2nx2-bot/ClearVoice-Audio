// Scroll animation
const animated=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(e=>{
e.forEach(i=>{
if(i.isIntersecting)i.target.classList.add('visible');
});
},{threshold:0.1});
animated.forEach(el=>observer.observe(el));

// Dark mode
document.getElementById('darkModeToggle')
.addEventListener('click',()=>document.body.classList.toggle('dark-mode'));

// Only one audio plays
const audios=document.querySelectorAll("audio");
audios.forEach(a=>{
a.addEventListener("play",()=>{
audios.forEach(o=>{
if(o!==a){o.pause();o.currentTime=0;}
});
});
});

// Floating CTA hide on contact
const contact=document.getElementById("contact");
const cta=document.getElementById("floatingCTA");

const ctaObserver=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
cta.classList.add("hidden");
}else{
cta.classList.remove("hidden");
}
});
});

ctaObserver.observe(contact);
