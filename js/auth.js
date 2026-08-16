const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredEmail = document.getElementById("email").value.trim();
    const enteredPassword = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const message = document.getElementById("loginMessage");

    if (!storedUser) {
        message.textContent = "No user found.";
        message.style.color = "red";
        return;
    }

    if (
        enteredEmail === storedUser.email &&
        enteredPassword === storedUser.password
    ) {
        localStorage.setItem("isLoggedIn", "true");

        message.textContent = "Login successful!";
        message.style.color = "green";

        window.location.href = "index.html";
    } else {
        message.textContent = "Invalid email or password.";
        message.style.color = "red";
    }
});
