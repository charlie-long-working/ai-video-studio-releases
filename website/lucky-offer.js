import { t, language } from './i18n.js';
const key='muse-lucky-offer-v3';
let percent=0;
const valid=value=>Number.isInteger(value)&&value>=25&&value<=35;
try { const saved=Number(localStorage.getItem(key)); if(valid(saved))percent=saved; } catch {}
export const discountPercent=()=>percent;
export const discountedPrice=(price,currency='VND')=>currency==='VND'?Math.round(price*(1-percent/100)/1000)*1000:Math.round(price*(1-percent/100)*100)/100;
// Rejection sampling gives each of the 11 whole-point outcomes exactly equal probability.
export function drawDiscount(random=crypto.getRandomValues.bind(crypto)){
 const bytes=new Uint32Array(1);const limit=2**32-(2**32%11);
 do{random(bytes);}while(bytes[0]>=limit);
 return 25+bytes[0]%11;
}
export function mountLuckyOffer(onChange){
 const host=document.getElementById('lucky-offer');if(!host)return;
 host.className='lucky-offer';
 host.innerHTML='<div class="orb-stage"><span class="orb-ring ring-one" aria-hidden="true"></span><span class="orb-ring ring-two" aria-hidden="true"></span><button type="button" class="lucky-orb"><span class="orb-core" aria-hidden="true">✦</span><span class="orb-value"></span></button><span class="orb-shockwave" aria-hidden="true"></span><span class="orb-particles" aria-hidden="true"></span></div><p class="orb-hint"></p><div class="orb-details"><h3 class="orb-title"></h3><p class="orb-copy" role="status" aria-live="polite"></p></div>';
 for(let i=0;i<24;i++){const particle=document.createElement('i');const angle=i*Math.PI/12;particle.style.setProperty('--x',`${Math.cos(angle)*(95+i%4*22)}px`);particle.style.setProperty('--y',`${Math.sin(angle)*(95+i%4*22)}px`);particle.style.setProperty('--turn',`${i*41}deg`);host.querySelector('.orb-particles').append(particle);}
 const button=host.querySelector('button');let busy=false;
 function render(){const label=percent.toLocaleString(language==='en'?'en-US':'vi-VN');button.disabled=!!percent||busy;button.setAttribute('aria-label',percent?t('Đã nhận ưu đãi ','Discount received ')+label+'%':t('Bấm quả cầu để nhận ưu đãi','Tap the orb to reveal your discount'));host.classList.toggle('revealed',!!percent);document.body.classList.toggle('prices-revealed',!!percent);host.querySelector('.orb-hint').textContent=t('Nhấn để khám phá mức giá dành cho bạn','Tap to discover your special price');host.querySelector('.orb-value').textContent=percent?`−${label}%`:'';host.querySelector('.orb-title').textContent=percent?t('Ưu đãi dành cho bạn','Your special offer'):'';host.querySelector('.orb-copy').textContent=percent?t(`Giảm ${label}% đã được áp dụng vào giá các gói.`,`Your ${label}% discount is applied to all plans.`):'';}
 button.addEventListener('click',async()=>{
  if(percent||busy)return;busy=true;button.disabled=true;host.setAttribute('aria-busy','true');
  const outcome=drawDiscount();const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  host.classList.add('spinning');
  await new Promise(resolve=>setTimeout(resolve,reduced?80:1250));
  host.classList.remove('spinning');host.classList.add('bursting');
  await new Promise(resolve=>setTimeout(resolve,reduced?80:650));
  percent=outcome;busy=false;try{localStorage.setItem(key,String(percent));}catch{}
  host.classList.remove('bursting');host.removeAttribute('aria-busy');render();onChange();
 });
 document.addEventListener('languagechange',render);render();onChange();
}
