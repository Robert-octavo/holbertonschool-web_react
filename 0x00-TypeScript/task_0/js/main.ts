/*
Write your code in the js/main.ts file:

  -Write an interface named Student that accepts the following elements:
    - firstName: string
    - lastName: string
    - age: number
    - location: string
  -Create 2 students variables called student1 and student2 and store them
  into an array named studentsList
  -Using Vanilla Javascript, render a table and for each elements in the
  array, append a new row to the table
  -Each row should contain the first name of the student and the location
*/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Robert",
  lastName: "Ortega",
  age: 40,
  location: "Cali",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Michigan",
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");

th1.innerHTML = "First Name";
th2.innerHTML = "Location";

tr.appendChild(th1);
tr.appendChild(th2);
thead.appendChild(tr);
table.appendChild(thead);

studentsList.forEach((student) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.innerHTML = student.firstName;
  td2.innerHTML = student.location;

  tr.appendChild(td1);
  tr.appendChild(td2);

  tbody.appendChild(tr);
});

table.appendChild(tbody);
document.body.appendChild(table);
