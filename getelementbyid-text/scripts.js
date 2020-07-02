var paragraph = document.getElementById("hiddenText");

paragraph.style.display = "none";

function toggleText() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

var showButton = document.getElementById("showMore");

showButton.addEventListener("click", toggleText);
