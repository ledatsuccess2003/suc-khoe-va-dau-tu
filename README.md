# Sức Khỏe và Đầu Tư

Web app thư viện audio review 10 sách về đầu tư và tài chính, tiếng Việt. Giao diện responsive, trình phát MP3, chỉnh tốc độ, tua 15 giây, hẹn giờ, lưu sách và vị trí nghe bằng localStorage. Không yêu cầu tài khoản; dữ liệu cá nhân lưu trên thiết bị, không đồng bộ.

## Chạy

`npx serve .` rồi mở địa chỉ được in ra. Deploy static bằng `npx vercel --prod`.

## Nội dung

10 bài review độc lập do AI hỗ trợ biên soạn, không phải bản dịch hoặc toàn văn sách. Nguồn nhà xuất bản được ghi trong books.json và giao diện. Bìa thiết kế riêng bằng HTML/CSS, không phải bìa chính thức. Audio giọng AI vi-VN-HoaiMyNeural, tạo sẵn trong audio/. Muốn tạo lại: `npm ci` và `node generate-audio.cjs` (cần truy cập dịch vụ TTS trực tuyến). Khách truy cập nghe file MP3 đã lưu; không cần khóa API.

Nội dung giáo dục, không tư vấn đầu tư cá nhân. Chưa cung cấp sách nói nguyên tác có giấy phép, thanh toán, tài khoản hay ứng dụng native. Cache giao diện hỗ trợ mở lại khi mất mạng; audio cần kết nối, không cam kết nghe ngoại tuyến. Thêm vào màn hình chính qua menu trình duyệt; khả năng cài phụ thuộc thiết bị.

Tên miền dự kiến: suckhoevadautu.vn. Chỉ gắn tên miền riêng sau khi chủ sở hữu đăng ký và cấu hình DNS.
