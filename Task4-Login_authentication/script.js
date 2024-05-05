let users = [{ username: "admin", password: "admin" }];
let currentUser = null;

function showRegisterForm() {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.getElementById("message").innerText = "";
}

function showLoginForm() {
    document.getElementById("register").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("message").innerText = "";
}

function register() {
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    if (newUsername === "" || newPassword === "") {
        document.getElementById("message").innerText = "Please enter a valid username and password.";
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    document.getElementById("message").innerText = "Registration successful. Please login.";
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        document.getElementById("message").innerText = "Invalid username or password.";
        return;
    }

    currentUser = user;
    document.getElementById("message").innerText = "";
    document.getElementById("login").style.display = "none";
    document.getElementById("final").style.display = "block";
}

function logout() {
    currentUser = null;
    document.getElementById("final").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").innerText = "";
}
