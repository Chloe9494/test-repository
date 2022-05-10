const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    tomato.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(){
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);