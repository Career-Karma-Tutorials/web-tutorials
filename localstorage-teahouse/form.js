var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var feedbackField = document.getElementById("feedback");

var saveButton = document.getElementById("saveButton");
var retrieveButton = document.getElementById("retrieveButton");

function saveResponses() {
    localStorage.setItem("name", nameField.value);
    localStorage.setItem("email", emailField.value);
	localStorage.setItem("feedback", feedbackField.value);
}

saveButton.addEventListener("click", function(e) { e.preventDefault(); saveResponses(); });

function retrieveResponses() {
    nameField.value = localStorage.getItem("name");
	emailField.value = localStorage.getItem("email");
	feedbackField.value = localStorage.getItem("feedback");
	console.log(nameField.value)
}

retrieveButton.addEventListener("click", function(e) { e.preventDefault(); retrieveResponses(); });
