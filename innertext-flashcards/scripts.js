var answerText = document.querySelector('p');
var button = document.querySelector('button');
var message = document.querySelector('#showMessage');

function showAnswer() {
    answerText.innerText = "No. Hyperlinks can be used on both text and images.";
    message.innerHTML = "<span style='color:red;'>You have revealed the answer.</span>";
}

button.addEventListener('click', showAnswer);