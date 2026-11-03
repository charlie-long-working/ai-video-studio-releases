# Changelog

## 0.2.5

- License 12 tháng theo lịch; giữ quyền license cũ. Landing và checkout Việt/Anh thay gói vĩnh viễn bằng gói 12 tháng, ưu đãi 599.000đ / $24; cập nhật mô tả chạy đồng thời và ưu đãi tài khoản.

## 0.2.4

- Trial công khai 1 ngày; người bán cấp số ngày tùy chọn qua gói daily.
- Cập nhật ưu đãi tài khoản Muse AI, trách nhiệm sử dụng và phạm vi hỗ trợ trên landing Việt/Anh.
- Sửa smoke Windows đợi cấu hình provider/model sẵn sàng và dùng màn hình hiển thị.

## 0.2.3

- Thêm trial 1/3 ngày bằng license offline có chữ ký, hạn cố định từ lúc cấp; giữ license trả phí cũ.
- Sửa test khởi động Chrome bị timeout quá ngắn trên Windows, cập nhật cache actions Node 24.
- Bao gồm màn hình riêng và sửa ảnh cảnh của 0.2.2; xem release notes để biết giới hạn provider.

## 0.2.2

## Màn hình làm việc

- Tách Studio dự án, Tạo video hàng loạt, Ghép thành phim và Hàng đợi thành các màn hình riêng.
- Giữ bản nháp khi chuyển màn hình; hàng đợi chung tiếp tục xử lý ở nền. Các màn làm việc có tóm tắt tiến trình và nút mở hàng đợi.
- Chuyển phần xuất storyboard sang Ghép thành phim, bên cạnh tab ghép clip từ máy/hàng đợi. Studio có nút chuyển sang xuất dự án.

## Studio và affiliate

- Sửa lỗi quá số ảnh khi một cảnh đã có ảnh nhưng hồ sơ nhân vật/sản phẩm chứa thêm ảnh. Ảnh chọn trực tiếp trong cảnh được ưu tiên, hồ sơ giữ nguyên.
- Bộ 5 prompt người mẫu, caption affiliate và 6 biến thể văn bản (3 hook × 2 CTA) từ thông tin sản phẩm đã xác minh. Đây là công cụ văn bản local, không tự tạo ảnh hoặc 6 video.
- Muse dùng tối đa 4 tác vụ độc lập theo giới hạn adapter; mỗi tác vụ có tab riêng, giữ mã khi huỷ hoặc phục hồi.

## Giới hạn và cập nhật

- Muse hiện chỉ hỗ trợ văn bản → video qua Chrome; ảnh tham chiếu và ảnh → video chưa bật. Cần tài khoản và đăng nhập thủ công.
- Mock là video ảnh tĩnh để thử luồng. Không có AI viết kịch bản, TTS API mới, lip-sync hoặc phụ đề đồng bộ từng từ.
- Phí phần mềm không bao gồm tài khoản/credit AI. Giữ nguyên dự án, video, hàng đợi và license khi cập nhật.
- macOS ký ad-hoc, chưa có Developer ID/notarization; Windows chưa ký chứng chỉ nhà phát hành. Bộ cài do CI kiểm tra riêng theo nền tảng trước khi phát hành.


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
