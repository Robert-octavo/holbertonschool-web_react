/*
  Write a function printTeacher:

  - It accepts two arguments firstName and lastName
  - It returns the first letter of the firstName and the full lastName
  - Example: printTeacher("John", "Doe") -> J. Doe

Write an interface for the function named printTeacherFunction.
*/

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher('John', 'Doe'));

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
