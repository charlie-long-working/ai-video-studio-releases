'use strict';
// Buildless page. No analytics, cookies, secret tokens or external API requests.
for (const link of document.querySelectorAll('.plan-contact')) {
  const subject=`Tư vấn license FRAME — ${link.dataset.plan}`;
  const body='Chào bạn,\nMình muốn tìm hiểu gói này. Vui lòng xác nhận giá, thời hạn, điều kiện cập nhật/hỗ trợ, đổi máy và hoàn tiền trước khi thanh toán.\n\nHệ điều hành của mình: ';
  link.href=`mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
