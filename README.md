# Authentication
### Đăng kí

1. Truy cập vào ứng dụng
2. Bấm vào đường link đến trang đăng kí
3. Hiển thị form đăng ký gồm các trường nhập:
    - Họ và tên: bắt buộc
    - Email: bắt buộc, đúng định dạng email
    - Mật khẩu: bắt buộc, lớn hơn 6 ký tự
4. Xác nhận mật khẩu: bắt buộc, giống mật khẩu
5. Nhập các trường thông tin => Bấm nút “Đăng ký”
    - Kiểm tra tính hợp lệ các trường thông tin. Nếu không hợp lệ => in ra lỗi
    - Kiểm tra email có trùng với email đã tồn tại trong ứng dụng. Nếu có => in ra lỗi
    - Thông báo đăng ký thành công, chuyển sang trang đăng nhập

### Đăng nhập

1. Truy cập vào ứng dụng
2. Bấm vào đường link đến trang đăng nhập
3. Hiển thị form đăng ký gồm các trường nhập:
    - Email: bắt buộc, đúng định dạng email
    - Mật khẩu: bắt buộc, lớn hơn 6 ký tự
4. Nhập các trường thông tin => Bấm nút “Đăng nhập”
- Kiểm tra tính hợp lệ các trường thông tin. Nếu không hợp lệ => in ra lỗi
- Kiểm tra email & password có tồn tại. Nếu không => in ra lỗi
- Kiểm tra loại tài khoản user và admin.
    - Nếu là tài khoản user => chuyển hướng đến trang của user.
    - Nếu là tài khoản admin => chuyển hướng đến trang admin