# Sức Khỏe và Đầu Tư

Web app thư viện 10 audio review chuyên sâu về sách đầu tư và tài chính, tiếng Việt. Mỗi bài tối thiểu 600 giây ở tốc độ 1×, có mục lục tương tác, nội dung chính, bài học, ví dụ thực hành và bản đọc. Giao diện responsive, trình phát MP3, chỉnh tốc độ, tua 15 giây, hẹn giờ, lưu sách và vị trí nghe bằng localStorage. Không yêu cầu tài khoản; dữ liệu cá nhân lưu trên thiết bị, không đồng bộ.

## Chạy

`npx serve .` rồi mở địa chỉ được in ra. Deploy static bằng `npx vercel --prod`.

## Nội dung

10 bài review độc lập do AI hỗ trợ biên soạn, không phải bản dịch hoặc toàn văn sách. Nguồn tác giả và nhà xuất bản được ghi trong books.json và giao diện. Các ví dụ số học được đặt riêng cho bài review, không giả làm tình huống trích nguyên tác. Bìa thiết kế riêng bằng HTML/CSS, không phải bìa chính thức. Audio giọng AI vi-VN-HoaiMyNeural, tốc độ tổng hợp -8%, tạo sẵn trong audio/. Muốn tạo lại: `npm ci` và `node generate-audio.cjs` (cần truy cập dịch vụ TTS trực tuyến). Có thể chỉ định ID, ví dụ `node generate-audio.cjs 1 2`. Audio tổng hợp theo từng phần, cache ở thư mục work của workspace rồi ghép bằng FFmpeg; không lặp bài hoặc chèn im lặng để đạt thời lượng. Tên file chứa hash nội dung để không phát nhầm bản cũ do cache. Khách truy cập nghe file MP3 đã lưu; không cần khóa API.

## Kiểm chứng thời lượng

`npm run verify` đọc trực tiếp metadata và dữ liệu frame của cả 10 file MP3 bằng music-metadata, kiểm tra mỗi bài >=600 giây, nội dung >=3000 từ theo khoảng trắng tiếng Việt và các mốc mục lục hợp lệ. Kết quả ghi vào audio-verification.json. Vercel chạy kiểm tra này trước khi xuất bản; bài dưới 10 phút làm deployment thất bại. Thời lượng hiển thị trong app lấy từ file audio đã đo, không phải ước lượng từ số chữ. Tăng tốc phát lên 1.5× hoặc 2× sẽ giảm thời gian nghe thực tế.

Nội dung giáo dục, không tư vấn đầu tư cá nhân. Chưa cung cấp sách nói nguyên tác có giấy phép, thanh toán, tài khoản hay ứng dụng native. Cache giao diện hỗ trợ mở lại khi mất mạng; audio cần kết nối, không cam kết nghe ngoại tuyến. Thêm vào màn hình chính qua menu trình duyệt; khả năng cài phụ thuộc thiết bị.

Tên miền dự kiến: suckhoevadautu.vn. Chỉ gắn tên miền riêng sau khi chủ sở hữu đăng ký và cấu hình DNS.
