var clicks = 0;

var clickCounter = document.querySelector("span");
var teaCup = document.querySelector("img");

function createClick() {
	console.log("The button has been clicked")
	clicks += 1;
	clickCounter.innerText = clicks;
}

teaCup.addEventListener("click", createClick)