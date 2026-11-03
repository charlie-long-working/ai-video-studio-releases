# Muse Auto - Dùng thử 1 ngày và 3 ngày

Bản bổ sung: 0.2.3. Cùng một bộ cài hỗ trợ trả phí và trial; không cần làm hai app khác nhau.

## Cách cấp cho khách

1. Khách cài phiên bản có hỗ trợ trial, mở Bản quyền / Kích hoạt.
2. Khách chọn Dùng thử 1 ngày hoặc Dùng thử 3 ngày, Copy mã thiết bị và gửi cho người bán. Hai nút chỉ chọn yêu cầu, không tự cấp quyền.
3. Người bán mở tools/cap-trial-1-ngay.command hoặc tools/cap-trial-3-ngay.command trên máy chứa checkout và khóa ký hiện có; dán mã thiết bị khi được hỏi. Không chạy license:init nếu đã có khóa.
4. Công cụ in thời điểm hết hạn và đường dẫn file .license. Chỉ gửi file này cho khách. Không gửi checkout, private-key.pem, .license-tools hay thư mục .license-issuer.
5. Khách dùng Nhập file license hoặc dán token rồi Kích hoạt. App hiển thị Dùng thử 1/3 ngày và thời điểm hết hạn. Không tự chạy hàng đợi sau khi kích hoạt.
6. Hết hạn chặn tạo video mới; dự án và file đã có vẫn được giữ. Nâng cấp bằng file license trả phí như trước.

## Lệnh cấp thủ công

Chạy trong thư mục checkout ai-video-studio trên máy người bán:

```sh
npm run license:issue -- --plan trial --days 1
npm run license:issue -- --plan trial --days 3
```

Công cụ sẽ hỏi mã thiết bị. Có thể thêm --device với mã thật và --out với đường dẫn .license chưa tồn tại. Trial không chấp nhận --until hoặc --months.

## Thời hạn và quy tắc

- 1 ngày = 24 giờ, 3 ngày = 72 giờ, tính từ thời điểm người bán cấp file. Ví dụ cấp lúc 10:00 ngày 03/11 thì gói 1 ngày hết hạn 10:00 ngày 04/11 theo cùng múi giờ. Gửi file ngay sau khi cấp; không tính lại từ lần khách mở app.
- Nhập lại token hoặc mở lại app không đổi ngày hết hạn. Không thay license trả phí còn hiệu lực bằng trial. Trial có thể nâng cấp lên gói trả phí.
- Công cụ người bán ghi một bản trial duy nhất cho mỗi mã thiết bị trong .license-issuer/trials. Đã cấp 1 ngày thì không cấp thêm 3 ngày cho cùng mã bằng công cụ này; sao lưu cả khóa và hồ sơ cấp trial, giữ cùng hồ sơ giữa các máy người bán.
- Thử nhập file đã cấp lại là được nếu còn hạn; để tìm file đã cấp, xem output trong hồ sơ thiết bị. Không xóa hồ sơ để cấp trial mới ngoài chủ ý.
- Cơ chế offline kiểm tra chữ ký, mã máy, hạn cố định và mốc giờ chống lùi cơ bản. Đây không phải chống sửa app, clone/snapshot hoặc xóa trạng thái tuyệt đối. Muốn quản lý tự đăng ký và hạn từ lần kích hoạt bằng thời gian server cần đợt tích hợp online riêng; hiện assets/license-service.json chưa cấu hình URL.
- Trial là quyền dùng phần mềm, không bao gồm tài khoản hay credit AI. Quyền và giới hạn provider giữ nguyên. Chưa có tự cấp trial từ website.
- Bản app cũ không hiểu gói trial; khách cần cập nhật bộ cài hỗ trợ trial trước khi nhập file.

## Kiểm tra

Các bài test dùng khóa tạm kiểm tra hai hạn 24/72 giờ, nhập lại/mở lại không reset, hết hạn đúng biên, không đổi sang trial dài hơn, không hạ license trả phí, nâng cấp lên trả phí và từ chối cấp trial lặp trên cùng thiết bị. Giao diện và app đóng gói được kiểm tra bằng profile riêng; không cấp trial thật cho máy chủ sản phẩm và không gọi AI có phí.
