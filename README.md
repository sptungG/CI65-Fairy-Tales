# Story Detail

*Đọc và Nghe Truyện*

1. Thực hiện chức năng xem danh sách truyện
2. Chọn truyện muốn đọc và nghe bằng cách bấm vào nút “Xem chi tiết”
3. Hiển thị màn hình đọc & nghe truyện gồm các thông tin:
- Tên truyện
- Tác giả
- Mô tả ngắn gọn

Và phần chi tiết của truyện (Phác thảo ở hình dưới)

- Nội dung từng trang truyện: nội dung text + ảnh đi kèm
- 2 nút (“quay lại trang trước”, “tiếp trang sau”)
- Thanh chạy audio, các nút chỉnh âm lượng, tạm dừng, dừng

- Luồng phụ 1
- Bấm vào nút “Quay lại trang trước” hoặc “Tiếp trang sau”
- Thanh chạy audio cũng chỉnh lại thời gian phù hợp với trang đó

Luồng phụ 2

- Chỉnh thời gian trên thanh chạy audio
- Hiển thị trang truyện tương ứng với thời gian chạy của audio

Ví dụ: 00:00 đến 05:00 → Trang 1

05:01 đến 10:00 → Trang 2

10:01 đến 15:00 → Trang 3

15:01 đến 20:00 → Trang 4

- Ở luồng phụ 1:
    - Nếu người dùng ở trang 2 và quay về trang 1 => Thời gian trên thanh audio thiết lập về 00:00
    - Nếu người dùng ở trang 2 và tiếp sang trang 3 => Thời gian trên thanh audio thiết lập đến 10:01
    - ....
- Ở luồng phụ 2:
    - Nếu người dùng chỉnh thời gian trên thanh audio về 04:00 => Hiển thị nội dung trang 1
    - Nếu người dùng chỉnh thời gian trên thanh audio về 16:35 => Hiển thị nội dung trang 4
    - ….