
const qs=(s,p=document)=>p.querySelector(s), qsa=(s,p=document)=>[...p.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>qs('.preloader')?.classList.add('hide'),500));
qsa('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const nav=qs('[data-nav]'); qs('[data-menu-toggle]')?.addEventListener('click',()=>nav.classList.toggle('open'));
const dot=qs('.cursor-dot'), ring=qs('.cursor-ring'); let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(dot){dot.style.left=mx+'px';dot.style.top=my+'px'}});
(function loop(){rx+=(mx-rx)*.15;ry+=(my-ry)*.15;if(ring){ring.style.left=rx+'px';ring.style.top=ry+'px'}requestAnimationFrame(loop)})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.15}); qsa('.reveal').forEach(el=>io.observe(el));
qsa('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{qsa('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;qsa('[data-category]').forEach(card=>card.style.display=(f==='all'||card.dataset.category===f)?'inline-block':'none')}));
