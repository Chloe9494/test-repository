const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    console.dir(loginInput.value);
    console.log("click!!!");
}

loginButton.addEventListener("click", onLoginBtnClick);