// dangnhap.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "admin") {
      email = "admin";
    }

    try {
      const response = await AccountAPI.login({ email, password });
      const { token, role, username, idCustomer } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);

      if (role === "Customer") {
        localStorage.setItem("customerId", idCustomer?.toString() || "");
      }

      if (role === "Admin") {
        window.location.href = "../admin/quanlysan.html";
      } else if (role === "Staff") {
        window.location.href = "../staff/quanlysan.html";
      } else if (role === "Customer") {
        window.location.href = "../customer/home.html";
      } else {
        errorMessage.textContent = "Không xác định được vai trò.";
      }
    } catch (error) {
      errorMessage.textContent =
        error?.response?.data || "Đăng nhập thất bại. Vui lòng thử lại.";
    }
  });
});
