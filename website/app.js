import { t, language, money } from './i18n.js';
import { priceFor, promotionActive, promotionNote, watchPricing } from './pricing.js';
function renderPricing() {
 const card = document.querySelector('.plan-grid .forever');
 if (card) {
  const price = priceFor('perpetual'); const formatted = money(price);
  card.querySelector('.price').textContent = formatted;
  card.querySelector('.plan-label').textContent = promotionActive() ? t('Đề xuất · Ưu đãi 7 ngày đầu','Recommended · Launch offer') : t('Đề xuất');
  card.querySelector('#perpetual-promotion').textContent = language === 'en' ? (promotionActive() ? '7-day launch offer: 2–8 November 2026, ending at 23:59 on 8 November (Vietnam time). After the offer: 999,000 VND.' : 'Regular price: 999,000 VND. One-time payment.') : promotionNote();
  card.querySelector('.plan-description').textContent = promotionActive() ? t('Mua một lần với giá ưu đãi, dùng phiên bản được cấp quyền không hết hạn.','Pay once at the launch price and keep using your licensed version with no expiry.') : t('Thêm 300.000đ so với gói 6 tháng để có license không hết hạn.');
  card.querySelector('.plan-comparison').textContent = language === 'en' ? `The ${promotionActive() ? 'offer ' : ''}price is about ${(price / 299000).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} times the 1-month plan (${formatted} ÷ 299,000 VND).` : 'Giá ' + (promotionActive() ? 'ưu đãi ' : '') + 'bằng khoảng ' + (price / 299000).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' lần gói 1 tháng (' + formatted + ' ÷ 299.000đ).';
  card.querySelector('.plan-contact').dataset.plan = t('Vĩnh viễn') + ' · ' + formatted;
 }
 for (const link of document.querySelectorAll('.plan-contact')) {
  const plan = language === 'en' ? link.dataset.plan.replace('1 tháng','1 month').replace('3 tháng','3 months').replace('6 tháng','6 months').replace('Vĩnh viễn','Perpetual') : link.dataset.plan;
  const subject = language === 'en' ? `Buy a Muse Auto license — ${plan}` : `Mua license Muse Auto — ${plan}`;
  const body = language === 'en' ? `Hello,\nI would like to buy the ${plan} plan. Please send payment instructions and an order reference, and confirm the refund terms before I pay.\n\nMy operating system: ` : 'Chào bạn,\nMình muốn mua gói ' + link.dataset.plan + '. Vui lòng hướng dẫn thanh toán, mã đơn và xác nhận điều kiện hoàn tiền trước khi mình thanh toán.\n\nHệ điều hành của mình: ';
  link.href = `mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 }
}
watchPricing(renderPricing);

document.addEventListener('languagechange',renderPricing);
