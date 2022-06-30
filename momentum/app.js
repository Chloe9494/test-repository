const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmitClick(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick() {

}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

