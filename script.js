
// --- PHẦN 1: CHUYỂN ĐỔI GIAO DIỆN ---

function showRegister() {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('register-view').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-view').style.display = 'none';
    document.getElementById('login-view').style.display = 'block';
}

// --- PHẦN 2: XỬ LÝ ĐĂNG KÝ ---

function register() {
    // 1. Lấy dữ liệu
    var user = document.getElementById('reg-user').value;
    var pass = document.getElementById('reg-pass').value;

    // 2. Kiểm tra rỗng
    if (user == "" || pass == "") {
        alert("Vui lòng không để trống!");
        return;
    }

    // 3. Lấy danh sách cũ từ LocalStorage
    // Nếu chưa có thì tạo mảng rỗng []
    var listUser = JSON.parse(localStorage.getItem('database_users')) || [];

    // 4. Kiểm tra user đã tồn tại chưa
    // Dùng hàm some() để quét mảng
    var daTonTai = listUser.some(function(item) {
        return item.username === user;
    });

    if (daTonTai) {
        alert("Tên tài khoản này đã có người dùng!");
        return;
    }

    // 5. Thêm user mới vào danh sách
    listUser.push({
        username: user,
        password: pass
    });

    // 6. Lưu lại vào LocalStorage
    localStorage.setItem('database_users', JSON.stringify(listUser));

    alert("Đăng ký thành công!");
    
    // Reset ô nhập và chuyển về trang login
    document.getElementById('reg-user').value = "";
    document.getElementById('reg-pass').value = "";
    showLogin();
}

// --- PHẦN 3: XỬ LÝ ĐĂNG NHẬP ---

function login() {
    // 1. Lấy dữ liệu nhập vào
    var user = document.getElementById('login-user').value;
    var pass = document.getElementById('login-pass').value;

    // 2. Lấy dữ liệu từ LocalStorage
    var listUser = JSON.parse(localStorage.getItem('database_users')) || [];

    // 3. Tìm user khớp cả tên và pass
    var userTimThay = listUser.find(function(item) {
        return item.username === user && item.password === pass;
    });

    // 4. Kiểm tra kết quả
    if (userTimThay) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Sai tài khoản hoặc mật khẩu!");
    }
}


function register() {
let inputUsername = document.getElementById("reg-user");
let username = inputUsername.value.trim()
let inputPassword = document.getElementById("reg-pass");
let password = inputPassword.value.trim()
let lowerCaseLetter = /[a-z]/g;
let upperCaseLetter = /[A-Z]/g;
let numbers = /[0-9]/g;

if (username.length < 6) {
  alert("Username must be at least 6 characters");
} else if (password.length < 8) {
  alert("Password must be at least 8 characters");
} else if (!password.match(lowerCaseLetter)) {
  alert("Password must contain a lowercase letter");
} else if (!password.match(upperCaseLetter)) {
  alert("Password must contain a uppercase letter");
} else if (!password.match(numbers)) {
  alert("Password must contain a number or special character");
} else  {
  alert("Registration successful");
}
}
