const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "unspider.user1" && password === "dss2023"){
        window.location.href = "https://dss-fire.github.io/unspider_log.io/"
    } else{
        loginErrorMsg.style.opacity = 1;
    }
})

