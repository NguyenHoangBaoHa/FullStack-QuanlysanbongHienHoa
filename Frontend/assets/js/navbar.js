function loadNavbar(role) {
  const navItems = document.getElementById("nav-items");
  let html = "";

  if (!role) {
    html += `
      <li><a href="dangky.html">Đăng ký</a></li>
      <li><a href="dangnhap.html">Đăng nhập</a></li>
    `;
  } else if (role === "Admin") {
    html += `
      <li><a href="quanlysan.html">Quản lý sân</a></li>
      <li><a href="quanlyloaisan.html">Quản lý loại sân</a></li>
      <li><a href="quanlynhanvien.html">Quản lý nhân viên</a></li>
      <li><a href="quanlykhachhang.html">Quản lý khách hàng</a></li>
      <li><a href="quanlyhoadon.html">Quản lý hóa đơn</a></li>
      <li><a href="thongkedoanhthu.html">Thống kê doanh thu</a></li>
      <li><a href="#" onclick="logout()">Đăng xuất</a></li>
    `;
  } else if (role === "Staff") {
    html += `
      <li><a href="quanlysan.html">Quản lý sân</a></li>
      <li><a href="quanlydatsan.html">Quản lý đặt sân</a></li>
      <li><a href="nhansan.html">Quản lý nhận sân</a></li>
      <li><a href="quanlyhoadon.html">Quản lý hóa đơn</a></li>
      <li><a href="#" onclick="logout()">Đăng xuất</a></li>
    `;
  } else if (role === "Customer") {
    html += `
      <li><a href="home.html">Trang chủ</a></li>
      <li><a href="thongtincanhan.html">Thông tin cá nhân</a></li>
      <li><a href="#" onclick="logout()">Đăng xuất</a></li>
    `;
  }

  navItems.innerHTML = html;
}

function logout() {
  localStorage.removeItem("role");
  location.reload();
}