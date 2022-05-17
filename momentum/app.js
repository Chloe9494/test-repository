const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");

function onLoginBtnClick(event) {
    toamto.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(){
    console.log(event);
    alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);