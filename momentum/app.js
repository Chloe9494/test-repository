const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem("username");

if (savedUsername === null) {

} else {

}


loginForm.addEventListener("submit", onLoginSubmit);
