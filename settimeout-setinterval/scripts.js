var ul = document.getElementById("coffees");

let i = 0;
let coffees = ["Cortado", "Macchiato", "Mocha", "Latte"];
let numberOfCoffees = coffees.length +1;

function iterateOverArray() {
    var li = document.createElement("li");
    li.innerText = coffees[i];
    ul.appendChild(li);
    i++;
}

var printCoffees = setInterval(iterateOverArray, 1000);

setTimeout(() => {
    clearInterval(printCoffees);
}, (numberOfCoffees) * 1000);
