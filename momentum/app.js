const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);