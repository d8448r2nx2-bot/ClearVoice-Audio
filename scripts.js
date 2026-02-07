const animated=document.querySelectorAll('.animate');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:0.15});
animated.forEach(el=>observer.observe(el));

const toggle=document.getElementById('darkModeToggle');
toggle.onclick=()=>{
const on=document.body.classList.toggle('dark-mode');
toggle.textContent=on?'☀️':'🌙';
};

const contact=document.querySelector('#contact');
const cta=document.querySelector('.floating-cta');
new IntersectionObserver(entries=>{
entries.forEach(e=>{
cta.classList.toggle('hidden',e.isIntersecting);
});
},{threshold:0.3}).observe(contact);
