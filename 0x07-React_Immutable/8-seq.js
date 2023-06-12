import { Seq } from "immutable";
/*
Create a function named printBestStudents:

    It accepts one object as argument. The object is formed with the following structure:

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};

    Calling the function should filter any student with a score < 70 and print to the console the first name and the last name with the first letter capitalized:

{
    "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
}
*/

export const printBestStudents = (grades) => {
  const seq = Seq(grades);
  const filtered = seq.filter((student) => {
    //student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1).toLowerCase();
    //student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1).toLowerCase();
    return student.score > 70
  });

  /*change the firsletter of the first to uppercase*/
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const obj = filtered.toJS();

  for (const key in obj) {
    obj[key].firstName = capitalizeFirstLetter(obj[key].firstName);
    obj[key].lastName = capitalizeFirstLetter(obj[key].lastName);
  }

  console.log(obj);

  return obj;
}

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 70,
    firstName: 'test',
    lastName: 'test',
  },
  3: {
    score: 80,
    firstName: 'tesT',
    lastName: 'tEst',
  }
};

printBestStudents(grades);
