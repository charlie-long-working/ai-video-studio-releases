# Changelog

## 0.2.1

- Sửa việc dọn profile kiểm thử trên Windows: chỉ xoá sau khi Electron đã thoát và nhả khoá file Chromium.
- Lưu cache media sau khi build thành công. Tính năng Studio và hàng đợi giữ như 0.2.0.

## 0.2.0

## Studio và thư viện dự án

- Lưu dự án, ảnh nhân vật/sản phẩm/bối cảnh và storyboard tại máy; tự lưu và mở lại dự án.
- Thư viện ảnh/video có khung hình xem trước, tìm tên/prompt/nhân vật/sản phẩm, lọc theo cảnh và phân trang.
- Chọn “Dùng bản này” cho từng cảnh; lựa chọn được lưu và dùng chung với phần xuất phim.
- Xem tiến trình từng cảnh, số cảnh có clip và voice còn khớp lời thoại.
- Mẫu kịch bản local cho KOL, sản phẩm và kể chuyện; hỗ trợ nhập/chỉnh sửa thủ công.

## Ghép phim và hàng đợi

- Nhập audio, gán voice từng cảnh; ghép clip với nhạc, phụ đề theo cảnh, logo và CTA.
- Huỷ tác vụ đang chờ/đang xử lý; xoá bản ghi khỏi danh sách sau khi worker đã dừng, giữ file gốc.
- Giữ mã tác vụ và trạng thái chưa rõ kết quả để tránh gửi lại trùng; huỷ trong app không bảo đảm huỷ tác vụ tại dịch vụ AI.
- Giữ tính năng CSV, sửa tác vụ chưa gửi, tạo 1–3 phiên bản và ghép phim local.

## Phạm vi hỗ trợ

- Muse qua Chrome hiện hỗ trợ tạo video từ văn bản; cần đăng nhập thủ công và tài khoản của bạn.
- Tạo ảnh AI và ảnh → video qua Muse chưa được xác minh/bật. Ảnh trong thư viện là ảnh nhập từ máy.
- Mock trong Studio tạo clip ảnh tĩnh để kiểm thử; không phải video AI có chuyển động.
- Mẫu kịch bản local không gọi AI. API Gemini/FPT và Flow chưa mở trong giao diện khách; voice dùng audio nhập từ máy.
- Phụ đề hiển thị theo cảnh, chưa đồng bộ từng từ hoặc khớp khẩu hình. Không cam kết đồng nhất nhân vật giữa các cảnh.
- Windows xuất MPEG-4/AAC trong MP4; macOS xuất H.264/AAC. Có kèm FFmpeg, mã nguồn tương ứng và thông báo LGPL.
- Phí phần mềm không bao gồm tài khoản hoặc credit AI. Video, hàng đợi và license cũ được giữ khi cập nhật.

## 0.1.9

- Sửa prompt/tên file chưa gửi, tạo 1–3 phiên bản mỗi cảnh và ghép phim local bằng FFmpeg.
- Phát hành bộ cài macOS Apple Silicon, Intel và Windows x64 qua CI bản địa.

## 0.1.8

- Dọn cache ứng dụng và làm mới phiên Muse sau 24 giờ; giữ video, hàng đợi và license.

## 0.1.3 — phát hành công khai chưa ký chứng chỉ

- CI xác minh ba bộ cài và chạy thử app đóng gói trên từng nền tảng.
- Link tải Latest cố định cho Windows x64, Mac Apple Silicon và Intel.
- SHA-256 kèm theo từng release; chỉ phân phối bộ cài và tài liệu.

## 0.1.2 — thử nghiệm nội bộ

- Hai tab tạo một video / nhập CSV và xem trước.
- Hàng đợi phân trang 20/50/100 dòng.
- License theo thiết bị, gói tháng và vĩnh viễn.
- Bản Mac nội bộ ký ad-hoc; chưa phát hành công khai được phê duyệt.
