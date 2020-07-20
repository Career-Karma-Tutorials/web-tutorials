// First Example

// const students = document.querySelector("ul");

// function createStudent(name) {
//     let li = document.createElement("li");
// 	li.textContent = name;
// 	return li;
// }

// students.appendChild(createStudent("Mark"));
// students.appendChild(createStudent("Chloe"));
// students.appendChild(createStudent("Louise"));

// Second Example

const sat_test = document.getElementById("sat_test");
const has_not_sat_test = document.getElementById("has_not_sat_test");

function createStudent(name) {
    let li = document.createElement("li");
li.textContent = name;
return li;
}

has_not_sat_test.appendChild(createStudent("Mark"));
has_not_sat_test.appendChild(createStudent("Chloe"));
has_not_sat_test.appendChild(createStudent("Louise"));

var louise = has_not_sat_test.lastChild;
sat_test.appendChild(louise);
