import { t } from './i18n.js';
const key='muse-lucky-offer-v1';
let percent=0;
try { const saved=Number(localStorage.getItem(key)); if(Number.isInteger(saved)&&saved>=10&&saved<=30)percent=saved; } catch {}
export const discountPercent=()=>percent;
export const discountedPrice=(price,currency='VND')=>currency==='VND'?Math.round(price*(1-percent/100)/1000)*1000:Math.round(price*(1-percent/100)*100)/100;
export function mountLuckyOffer(onChange){
 const host=document.getElementById('lucky-offer');if(!host)return;
 host.className='lucky-offer';
 host.innerHTML='<button type="button" class="lucky-orb"><span class="orb-core" aria-hidden="true">✦</span><span class="orb-value"></span></button><div><h3 class="orb-title"></h3><p class="orb-copy" role="status" aria-live="polite"></p></div>';
 const button=host.querySelector('button');
 function render(){button.disabled=!!percent;button.setAttribute('aria-label',percent?t('Đã nhận ưu đãi ','Discount received ')+percent+'%':t('Bấm quả cầu để nhận ưu đãi','Tap the orb to reveal your discount'));host.classList.toggle('revealed',!!percent);host.querySelector('.orb-value').textContent=percent?`−${percent}%`:'';host.querySelector('.orb-title').textContent=percent?t('Ưu đãi dành cho bạn','Your special offer'):t('Chạm quả cầu, mở ưu đãi','Tap to unlock your offer');host.querySelector('.orb-copy').textContent=percent?t(`Giảm ${percent}% đã được áp dụng vào giá các gói.`,`Your ${percent}% discount is applied to all plans.`):t('Bấm để khám phá ưu đãi thanh toán của bạn.','Tap to reveal your payment offer.');}
 button.addEventListener('click',()=>{if(percent)return;const bytes=new Uint32Array(1);do{crypto.getRandomValues(bytes);}while(bytes[0]>=4294967292);percent=10+bytes[0]%21;try{localStorage.setItem(key,String(percent));}catch{}render();onChange();});
 document.addEventListener('languagechange',render);render();onChange();
}
