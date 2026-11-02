# Muse Auto Studio — 0.2.0

Ứng dụng không tự cập nhật app đang cài; thoát app cũ, cài bộ cài đúng hệ điều hành/kiến trúc rồi mở lại. Không xoá Application Support: đó là nơi giữ hàng đợi, license và phiên đăng nhập hiện có.

## Một video đầu tiên không tốn lượt AI

1. Trong **Studio dự án**, nhập tên và bấm **Tạo dự án**. Chọn thư mục cha; app tạo một thư mục dự án riêng. **Mở thư mục** giúp tìm tài nguyên đã sao chép. **Mở dự án** chọn đúng thư mục có `project.json`. Đổi tên dự án chỉ đổi tên hiển thị, giữ đường dẫn tài nguyên cho các tác vụ đang có.
2. Chọn loại ảnh và **Thêm ảnh mẫu**. Nhận PNG/JPG/WebP, tối đa 20 MB/ảnh, 40 triệu điểm ảnh, 16.000 px mỗi chiều, 50 ảnh/lần, 300 ảnh/dự án. Dùng hộp thoại chọn nhiều ảnh; chưa có kéo thả. App sao chép ảnh vào dự án, giữ ảnh gốc. Ảnh thiếu/đã thay đổi có thông báo; nhập lại ảnh gốc để khôi phục bản sao bị thiếu.
3. Trong **Nhân vật / KOL**, lưu tên, ngoại hình, trang phục, phong cách và ảnh. Chọn đúng hư cấu/người thật. Người thật cần xác nhận quyền sử dụng ảnh/giọng. Hồ sơ có thể chỉnh sửa, nhân bản, dùng lại ở nhiều cảnh.
4. Trong **Sản phẩm**, thêm ảnh nhiều góc, thông tin đã xác nhận, điểm bán hàng, CTA và link affiliate. Chỉ nhập thông tin thật đã kiểm tra; app không tự tạo thông số hoặc trải nghiệm chứng thực.
5. Trong **Storyboard**, thêm cảnh thủ công hoặc chọn một trong ba mẫu local: KOL giới thiệu, sản phẩm kèm thuyết minh, kể chuyện có nhân vật. Mẫu không gọi AI. Sửa nhân vật/sản phẩm/ảnh, prompt hình ảnh/chuyển động, lời thoại, phụ đề, thời lượng và tỷ lệ. Dùng nút lên/xuống để đổi thứ tự; nhân bản cảnh khi cần.
6. Chọn **Mock local**, chọn cảnh, bấm **Xem trước**. Xem prompt, tên file, số cảnh/yêu cầu. Xác nhận thêm vào hàng đợi chưa chạy; bấm **Bắt đầu hàng loạt** ở hàng đợi bên dưới khi sẵn sàng. Mock từ ảnh dùng một ảnh mở đầu và xuất video ảnh tĩnh, không phải chuyển động AI, không bảo đảm giữ khuôn mặt/sản phẩm như dịch vụ thật. Mỗi cảnh chỉ nhận một ảnh duy nhất sau khi gộp ảnh cảnh/nhân vật/sản phẩm; cùng một ảnh được dùng ở nhiều hồ sơ chỉ tính một lần. Nếu có nhiều ảnh, chọn một ảnh/composite để kiểm thử. Prompt `[fail]` giúp thử lỗi Mock.
7. **Voice Studio**: chọn cảnh và **Nhập voice từ máy**. Nhận MP3/WAV/M4A/AAC/FLAC/OGG dưới 50 MB, tối đa hai giờ. Audio được kiểm tra bằng FFprobe rồi sao chép vào dự án. **Nghe thử** hỗ trợ đoạn dưới 8 MB. Khi đổi lời thoại, voice đang gán bị bỏ gán để tránh ghép nhầm; file audio vẫn được giữ để dùng lại.
8. **Ghép và xuất video affiliate**: chọn một phiên bản hoàn tất cho từng cảnh, tỷ lệ 9:16/16:9/1:1, HD/Full HD. Chọn logo trong thư viện, sửa CTA, bật/tắt phụ đề, chỉnh âm lượng voice và nhạc nền. Voice gán thay audio gốc của cảnh; tuỳ chọn giữ audio gốc chỉ áp dụng cảnh chưa gán voice. Chọn tên/nơi lưu MP4. Có tiến độ và huỷ; file chỉ xuất hiện khi hoàn tất, không ghi đè video gốc hoặc kết quả cũ.

Phụ đề hiện trọn cảnh theo thời lượng video, không đồng bộ từng từ. Nên dùng câu ngắn. Voice dài bị cắt, voice ngắn được thêm im lặng. Không có lip-sync. Tỷ lệ xuất được FFmpeg chuẩn hoá; cảnh khác tỷ lệ được thêm viền. Tối đa 100 cảnh/hai giờ mỗi phim. Chọn ổ hỗ trợ hard link (APFS/NTFS) để xuất an toàn; ổ không hỗ trợ sẽ báo lỗi thay vì ghi đè.

## Dịch vụ ngoài

- **Muse:** giữ luồng video từ prompt hiện có và phiên app-owned Chrome 24 giờ. Chưa xác minh ảnh tham chiếu/tải ảnh trong adapter, nên storyboard có ảnh bị chặn với Muse. Không bật lại Flow.
- **Kling qua fal:** đã khảo sát tài liệu image-to-video và queue; chưa có key/tài khoản để tích hợp và kiểm chứng end-to-end. UI không giả là đã gọi dịch vụ. Chưa có adapter fal được bật trong hàng đợi.
- **FPT.AI:** adapter được giữ trong mã nguồn nhưng tạo voice bằng API và cài đặt key đang ẩn trong bản này. Dùng **Nhập voice từ máy**; không có tạo TTS API mới qua giao diện khách.
- **ElevenLabs/Gemini TTS, AI viết kịch bản và lip-sync:** chưa tích hợp. Adapter kịch bản local tách riêng với hợp đồng API tương lai; không gắn nhãn mẫu local thành kết quả AI.

Chưa thử dịch vụ thật và chưa có ước tính giá đã xác minh. Không có dịch vụ tính phí nào được gọi trong quá trình phát triển/kiểm thử này.

## Hàng loạt

Chọn nhân vật × sản phẩm × mẫu, xem số dự án và tổng tác vụ (ba cảnh mỗi mẫu), đặt giới hạn rồi chọn nơi lưu các bản sao. Tối đa 20 dự án/500 MB mỗi lô, chỉ Mock local. Dự án bản sao có tài nguyên riêng, không ảnh hưởng dự án gốc. Xem từng prompt rồi xác nhận thêm hàng đợi; không tự chạy. Dùng nút tạm dừng/tiếp tục của hàng đợi; tác vụ đang xử lý vẫn hoàn tất, tác vụ chưa rõ kết quả không tự gửi lại. Mở từng dự án bản sao để thêm voice và xuất phim. Bản xem trước lô chỉ ở phiên hiện tại; các thư mục đã tạo và hàng đợi đã xác nhận vẫn được lưu khi đóng app.

## Cập nhật và dữ liệu

Chọn bộ cài đúng hệ điều hành/kiến trúc trong Releases và kiểm tra SHA-256 đi kèm. Ghi chú phát hành nêu kết quả kiểm tra và trạng thái chữ ký. Không xoá Application Support khi cập nhật: hàng đợi, license và dữ liệu Chrome của app được giữ tại đó.

Thông tin dự án tối đa 4 MB, không tính ảnh/audio/video là các file riêng. App từ chối lưu mô tả quá lớn trước khi ghi. API key cũ không bị thay đổi định dạng hoặc xoá tự động; giao diện cài đặt key chưa mở trong bản này.

## Thư viện và tiến trình phim · 0.2.0

Thư viện trong Studio hiển thị ảnh đã nhập và video hoàn tất của dự án đang mở. Lọc Ảnh/Video, lọc theo cảnh, tìm tên/prompt/nhân vật/sản phẩm; mỗi trang tối đa 12 tài nguyên. Ảnh xem trước video lấy từ khung hình thật bằng FFmpeg. Nút phát mở trình phát mặc định của máy, nút Thư mục định vị file. Nếu file đã bị di chuyển, thao tác báo lỗi; không tự tạo lại video.

Bấm **Dùng bản này** để lưu clip được chọn vào dự án. Phần xuất phim dùng cùng lựa chọn, kể cả sau khi mở lại. Clip đã chọn bị xoá khỏi hàng đợi sẽ yêu cầu chọn lại trước khi xuất. Nhân bản cảnh không mang theo lựa chọn clip của cảnh gốc.

Tiến trình đếm số cảnh có clip hoàn tất, ảnh được gắn trực tiếp và voice còn khớp lời thoại; không đánh giá chất lượng AI hoặc sự đồng nhất nhân vật. Mở **Kiểm tra từng cảnh** để xem cảnh đang chờ/tạo/lỗi và bấm cảnh để lọc thư viện. Mock được ghi rõ là dữ liệu thử, không phải kết quả AI.
