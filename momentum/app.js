const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color = "blue";
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);