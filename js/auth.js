const loginForm = document.getElementById("loginForm");

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "Admin@123";
const signupLink = document.querySelector(".head_context-link");


if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredEmail = document
            .getElementById("email")
            .value
            .trim();

        const enteredPassword =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");

        if (
            enteredEmail === ADMIN_EMAIL &&
            enteredPassword === ADMIN_PASSWORD
        ) {
            localStorage.setItem("isLoggedIn", "true");

            localStorage.setItem(
                "loggedInUser",
                JSON.stringify({
                    email: ADMIN_EMAIL,
                    role: "admin"
                })
            );

            message.textContent = "Login successful!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 500);

        } else {
            message.textContent =
                "Invalid email or password.";

            message.style.color = "red";
        }
    });
}

if (signupLink) {
    signupLink.addEventListener("click", (event) => {

        const isLoggedIn =
            localStorage.getItem("isLoggedIn") === "true";

        if (isLoggedIn) {
            event.preventDefault();

            window.location.href = "index.html";
        }
    });
}