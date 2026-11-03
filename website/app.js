import { t, language, money } from './i18n.js';
import { priceFor, promotionActive, promotionNote, watchPricing } from './pricing.js';
function renderPricing() {
 const card = document.querySelector('.plan-grid .annual');
 if (card) {
  const price = priceFor('month12',undefined,language==='en'?'USD':'VND'); const formatted = money(price);
  card.querySelector('.price').textContent = formatted;
  card.querySelector('.plan-label').textContent = promotionActive() ? t('Đề xuất · Ưu đãi 7 ngày đầu','Recommended · Launch offer') : t('Đề xuất');
  card.querySelector('#annual-promotion').textContent = language === 'en' ? (promotionActive() ? '7-day launch offer: 2–8 November 2026, ending at 23:59 on 8 November (Vietnam time). After the offer: $40 USD.' : 'Regular price: $40 USD. One-time payment.') : promotionNote();
  card.querySelector('.plan-description').textContent = promotionActive() ? t('Thanh toán một lần với giá ưu đãi cho 12 tháng sử dụng, cập nhật và hỗ trợ.','Pay once at the launch price for 12 months of use, updates and support.') : t('Thanh toán một lần cho 12 tháng sử dụng, cập nhật và hỗ trợ.');
  const base=priceFor('month1',undefined,language==='en'?'USD':'VND')*12; const saving=((1-price/base)*100).toLocaleString(language==='en'?'en-US':'vi-VN',{minimumFractionDigits:1,maximumFractionDigits:1});
  card.querySelector('.plan-comparison').textContent=language==='en'?`Save ${saving}% compared with 12 separate 1-month purchases (${money(base)}).`:`Tiết kiệm ${saving}% so với mua 12 lần gói 1 tháng (${money(base)}).`;
  card.querySelector('.plan-contact').dataset.plan = t('12 tháng') + ' · ' + formatted;
 }
 const keys=['month1','month3','month6','month12'];
 for (const [index,article] of [...document.querySelectorAll('.plan-grid article')].entries()) {
  const amount=priceFor(keys[index],undefined,language==='en'?'USD':'VND');
  article.querySelector('.price').textContent=money(amount);
  article.querySelector('.plan-contact').dataset.plan=t(['1 tháng','3 tháng','6 tháng','12 tháng'][index])+' · '+money(amount);
 }
 for (const link of document.querySelectorAll('.plan-contact')) {
  const plan = language === 'en' ? link.dataset.plan.replace('1 tháng','1 month').replace('3 tháng','3 months').replace('6 tháng','6 months').replace('12 tháng','12 months') : link.dataset.plan;
  const subject = language === 'en' ? `Buy a Muse Auto license — ${plan}` : `Mua license Muse Auto — ${plan}`;
  const body = language === 'en' ? `Hello,\nI would like to buy the ${plan} plan. Please send payment instructions and an order reference, and confirm the refund terms before I pay.\n\nMy operating system: ` : 'Chào bạn,\nMình muốn mua gói ' + link.dataset.plan + '. Vui lòng hướng dẫn thanh toán, mã đơn và xác nhận điều kiện hoàn tiền trước khi mình thanh toán.\n\nHệ điều hành của mình: ';
  link.href = `mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 }
}
watchPricing(renderPricing);

document.addEventListener('languagechange',renderPricing);
