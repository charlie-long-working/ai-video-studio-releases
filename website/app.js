import { priceFor, promotionActive, promotionNote, watchPricing } from './pricing.js';
function renderPricing() {
 const card = document.querySelector('.plan-grid .forever');
 if (card) {
  const price = priceFor('perpetual'); const formatted = price.toLocaleString('vi-VN') + 'đ';
  card.querySelector('.price').textContent = formatted;
  card.querySelector('.plan-label').textContent = promotionActive() ? 'Đề xuất · Ưu đãi 7 ngày đầu' : 'Đề xuất';
  card.querySelector('#perpetual-promotion').textContent = promotionNote();
  card.querySelector('.plan-description').textContent = promotionActive() ? 'Mua một lần với giá ưu đãi, dùng phiên bản được cấp quyền không hết hạn.' : 'Thêm 300.000đ so với gói 6 tháng để có license không hết hạn.';
  card.querySelector('.plan-comparison').textContent = 'Giá ' + (promotionActive() ? 'ưu đãi ' : '') + 'bằng khoảng ' + (price / 299000).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' lần gói 1 tháng (' + formatted + ' ÷ 299.000đ).';
  card.querySelector('.plan-contact').dataset.plan = 'Vĩnh viễn · ' + formatted;
 }
 for (const link of document.querySelectorAll('.plan-contact')) {
  const subject = `Mua license Muse Auto — ${link.dataset.plan}`;
  const body = 'Chào bạn,\nMình muốn mua gói ' + link.dataset.plan + '. Vui lòng hướng dẫn thanh toán, mã đơn và xác nhận điều kiện hoàn tiền trước khi mình thanh toán.\n\nHệ điều hành của mình: ';
  link.href = `mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 }
}
watchPricing(renderPricing);
