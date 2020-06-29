const heading = document.querySelector("h1");
const paragraph = document.querySelector("p");
const body = document.querySelector("body");

function enableDarkMode() {
    heading.setAttribute("style", "color: white;");
    paragraph.setAttribute("style", "color: white;");
    body.setAttribute("style", "background-color: black;");
}

document.querySelector("button").addEventListener("click", enableDarkMode);