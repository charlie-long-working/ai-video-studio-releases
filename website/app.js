'use strict';
for (const link of document.querySelectorAll('.plan-contact')) {
 const subject=`Mua license Muse Auto — ${link.dataset.plan}`;
 const body='Chào bạn,\nMình muốn mua gói '+link.dataset.plan+'. Vui lòng hướng dẫn thanh toán, mã đơn và xác nhận điều kiện hoàn tiền trước khi mình thanh toán.\n\nHệ điều hành của mình: ';
 link.href=`mailto:charlie.nguyen.forwork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
