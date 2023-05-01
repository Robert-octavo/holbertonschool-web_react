/*
Write an interface named Teacher that accepts the following elements:

  - firstName: string - can only be set during initialization of an object of this interface
  - lastName: string - can only be set during initialization of an object of this interface
  - fullTimeEmployee: boolean
  - yearsOfExperience: number - optional
  - location: string
  - Add the possibility to add any attribute to the Teacher object like contract(boolean) without specifying the name of the attribute:
    - Property should be a string
    - Type of this property can be anything

*/

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: true,
};

console.log(teacher3);
