const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "unspider.user1" && password === "dss2021"){
        alert(window.location.href = "https://www.un-spider.org/");

        location.reload();
    } else{
        loginErrorMsg.style.opacity = 1;
    }
})

