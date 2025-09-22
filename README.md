# tool-h4ck-giaitoan-byethost17-com
# 🧠 Extension hỗ trợ đề thi Toán - HoangLong Edition

Một tiện ích mở rộng dành cho trang [giaitoan.byethost17.com](https://giaitoan.byethost17.com), giúp bạn thao tác nhanh hơn khi làm bài thi trực tuyến.

## 🚀 Tính năng

1. **Bypass kiểm tra mã định danh**  
   - Cho phép bật/tắt trong popup  
   - Giúp vượt qua bước kiểm tra fingerprint mà không cần nhập mật khẩu

2. **Xem đáp án**  
   - Nhấn nút để hiển thị đáp án đúng của đề thi  
   - Gọi hàm `showDapAn()` từ file `showDapAn.js`

3. **Hiện điểm số hiện tại**  
   - Nhấn nút để bắt đầu cập nhật điểm số theo thời gian thực  
   - Gọi hàm `showDiemSo()` để tính điểm từ các phần đã làm

## 📦 Cài đặt

### Chrome/Edge

1. Mở `chrome://extensions`  
2. Bật **Developer mode**  
3. Nhấn **Load unpacked** → chọn thư mục chứa `manifest.json`

### Firefox

1. Truy cập `about:debugging#/runtime/this-firefox`  
2. Chọn **Load Temporary Add-on** → chọn file `manifest.json`


## 🧩 Yêu cầu

- File `showDapAn.js` phải được host công khai tại:  
  `https://ionglong07.github.io/raw/XemDapAn/showDapAn.js`  
  và chứa hai hàm: `showDapAn()` và `showDiemSo()`

## ✨ Giao diện popup

- Checkbox: Bật/tắt bypass mã định danh  
- Nút: Xem đáp án  
- Nút: Hiện điểm số  
- Footer: `Made by HoangLong`

## 📜 License

MIT — thoải mái dùng, sửa, chia sẻ.

---

**Made with ❤️ by HoangLong**
