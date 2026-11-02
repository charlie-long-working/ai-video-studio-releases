# Muse Auto 0.2.0 — Huỷ và xoá tác vụ

- **Huỷ** dùng khi đang chờ hoặc đang xử lý. Đang chờ sẽ không được gửi. Đang xử lý có thể hiện **Đang huỷ** cho tới khi worker thực sự dừng, rồi thành **Đã huỷ**. Với thao tác Chrome đang chờ phản hồi, app có thể cần đợi thao tác đó trả về; app không đóng toàn bộ Chrome để ép dừng.
- Nếu chưa nhấn Enter/gửi request, app kiểm tra yêu cầu huỷ ngay trước thao tác gửi. Nếu đã gửi, app vẫn cố lấy và lưu mã/URL tác vụ rồi dừng theo dõi/tải cục bộ. Không tự gửi lại khi mở app.
- Huỷ trong app **không xác nhận dịch vụ đã huỷ**. Tác vụ từ xa có thể tiếp tục và sử dụng lượt tạo; app không hứa hoàn lượt/hoàn tiền. Hiện các adapter chưa công bố hỗ trợ huỷ từ xa.
- Dùng bộ lọc **Đã huỷ** để xem tác vụ đã huỷ hoặc đang dừng. Nếu kết quả gửi chưa rõ, bản ghi được giữ và có thể nhập mã tìm được sau này để lưu tham chiếu, vẫn giữ trạng thái đã huỷ.
- **Xoá** chỉ xuất hiện khi worker đã dừng, cho tác vụ hoàn tất/đã huỷ/thất bại/chưa rõ. Hộp thoại nêu tên tác vụ và xác nhận chỉ xoá khỏi danh sách. Không xoá video, ảnh, audio hoặc dự án.
- Mã tác vụ và thông tin lịch sử vẫn được lưu nội bộ. Nếu tệp MP4 hoàn chỉnh thắng cuộc đua với yêu cầu huỷ, app giữ tệp và trạng thái hoàn tất. Chỉ file tạm thuộc lần tải đang dừng được dọn.
- Nếu phiên bản video đang chọn ở storyboard bị xoá khỏi hàng đợi, hãy chọn lại phiên bản còn trong danh sách. File gốc vẫn có thể chọn bằng **Thêm video từ máy** trong Ghép thành phim.

**Cài đặt API** đã ẩn khỏi sidebar, biểu tượng bánh răng, hộp thoại Gemini và form FPT chưa được xác minh. Luồng nhập audio từ máy, Bản quyền/Kích hoạt, Muse Chrome và dọn cache/phiên 24 giờ được giữ. API key cũ không bị xoá hoặc đổi định dạng. Tính năng API key có thể được mở lại sau khi xác minh, không cần di chuyển dữ liệu cũ.

Khi cập nhật, thoát app cũ rồi cài bộ cài đúng kiến trúc từ Releases. Không xoá Application Support. Mac ký ad-hoc, chưa Apple Developer ID/notarization; Windows chưa ký publisher. Xem kết quả kiểm tra của bản phát hành trong release notes.
