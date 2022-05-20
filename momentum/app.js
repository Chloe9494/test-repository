const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginBtnClick(event) {
    toamto.preventDefault();
    console.log(loginInput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);

