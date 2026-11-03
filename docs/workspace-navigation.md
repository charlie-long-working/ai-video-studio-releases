# Muse Auto 0.2.2 - Màn hình và hàng đợi

- Studio dự án: hồ sơ nhân vật/sản phẩm, thư viện, storyboard, chuẩn bị voice và xem trước tác vụ. Nút “Ghép và xuất dự án này” mở phần xuất đúng dự án trong màn hình Ghép thành phim.
- Tạo video hàng loạt: Một video / Hàng loạt CSV, đăng nhập Muse và cấu hình đầu ra.
- Ghép thành phim: hai tab “Clip từ máy / hàng đợi” và “Storyboard dự án”. Voice theo cảnh được chuẩn bị trong Studio; chọn clip, phụ đề, nhạc/logo/CTA và xuất dự án ở tab Storyboard.
- Hàng đợi: bảng tác vụ chung, lọc/tìm kiếm, sửa tác vụ chưa gửi, hủy/xóa/thử lại và bắt đầu/tạm dừng gửi mới. Các màn khác chỉ có tóm tắt và nút Mở hàng đợi. Các tác vụ và bản nháp không bị mất khi đổi màn.

## Sửa lỗi ảnh

Ảnh gắn trực tiếp vào cảnh được ưu tiên. Khi đã có ảnh cảnh, không cộng thêm toàn bộ ảnh hồ sơ người mẫu/sản phẩm. Các ảnh hồ sơ vẫn được giữ. Nếu cảnh chưa chọn ảnh, dùng bộ ảnh hồ sơ làm nguồn dự phòng. Mock nhận tối đa một ảnh; cảnh chọn nhiều ảnh vẫn báo rõ cách chọn lại. Muse vẫn chưa bật ảnh tham chiếu/ảnh thành video.

Với dự án đã có ba cảnh và mỗi cảnh có một ảnh: chọn ba cảnh -> Xem trước -> Xác nhận thêm -> Mở hàng đợi -> Bắt đầu/Tiếp tục. Khi hoàn tất, quay Studio để chọn take hoặc mở Ghép và xuất dự án này. Mock chỉ là ảnh tĩnh; không có voice vẫn xuất được.

## Kiểm thử

213 tests/17 files qua, build/typecheck qua. Studio smoke kiểm tra bốn màn riêng biệt, giữ prompt đang soạn và chạy Mock qua chuyển màn; storyboard -> clip -> chọn take -> voice/phụ đề/logo/CTA -> MP4. Smoke form CSV/tạo video Mock qua. Mọi kiểm thử dùng fixture/Mock, không dùng credit dịch vụ thật. Bản ARM64 được đóng gói và kiểm tra startup/restart riêng trước khi cài Applications.
