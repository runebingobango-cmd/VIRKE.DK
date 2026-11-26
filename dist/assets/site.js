const button=document.querySelector('.menu');const nav=document.querySelector('.nav');button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.textContent=open?'Luk':'Menu';nav.classList.toggle('open',open)});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{button.setAttribute('aria-expanded','false');button.textContent='Menu';nav.classList.remove('open')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){button.click();button.focus()}});
const wheel=document.querySelector('.quote-wheel');
if (wheel) {
const slides=[...wheel.querySelectorAll('.quote-slide')];
const controls=wheel.querySelector('.quote-controls');
const [previous,next,rotation]=controls.querySelectorAll('button');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let index=0, timer;
function show(offset){
  slides[index].hidden=true;
  index=(index+offset+slides.length)%slides.length;
  slides[index].hidden=false;
  controls.querySelector('span').textContent=(index+1)+' / '+slides.length;
}
function stop(){clearInterval(timer);timer=undefined;rotation.textContent='Afspil';}
function start(){stop();timer=setInterval(()=>show(1),12000);rotation.textContent='Pause';}
previous.onclick=()=>{stop();show(-1);};
next.onclick=()=>{stop();show(1);};
rotation.onclick=()=>timer?stop():start();
wheel.addEventListener('pointerenter',stop);
wheel.addEventListener('focusin',event=>{if(event.target!==rotation)stop();});
reduced.addEventListener('change',stop);
controls.hidden=false;
if(reduced.matches)stop();else start();

}

const taskHero = document.querySelector('.task-hero');
if (taskHero) {
  const slides = [...taskHero.querySelectorAll('.task-question')];
  const photos = taskHero.querySelectorAll('.task-photo');
  const controls = taskHero.querySelector('.task-controls');
  const [prev, next, play] = controls.querySelectorAll('button');
  const status = controls.querySelector('span');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;
  let timer;
  function step(offset) {
    slides[active].hidden = true;
    photos[active].dataset.active = 'false';
    active = (active + offset + slides.length) % slides.length;
    slides[active].hidden = false;
    photos[active].dataset.active = 'true';
    status.textContent = (active + 1) + ' / ' + slides.length;
  }
  function pause() {
    clearInterval(timer);
    timer = undefined;
    play.textContent = 'Afspil';
  }
  function start() {
    timer = setInterval(() => step(1), 12000);
    play.textContent = 'Pause';
  }
  prev.onclick = () => { pause(); step(-1); };
  next.onclick = () => { pause(); step(1); };
  play.onclick = () => timer ? pause() : start();
  taskHero.addEventListener('focusin', event => { if (event.target !== play) pause(); });
  reducedMotion.addEventListener('change', pause);
  controls.hidden = false;
  if (!reducedMotion.matches) start();
}
