/*
Create the DirectorInterface interface with the 3 expected methods:

  - workFromHome() returning a string
  - getCoffeeBreak() returning a string
  - workDirectorTasks() returning a string

Create the TeacherInterface interface with the 3 expected methods:

  - workFromHome() returning a string
  - getCoffeeBreak() returning a string
  - workTeacherTasks() returning a string

Create a class Director that will implement DirectorInterface

  - workFromHome should return the string Working from home
  - getCoffeeBreak should return the string Getting a coffee break
  - workDirectorTasks should return the string Getting to director tasks

Create a class Teacher that will implement TeacherInterface

  - workFromHome should return the string Cannot work from home
  - getCoffeeBreak should return the string Cannot have a break
  - workTeacherTasks should return the string Getting to work

Create a function createEmployee with the following requirements:

  - It can return either a Director or a Teacher instance
  - It accepts 1 arguments:
    - salary(either number or string)
  - if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
*/

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

export default createEmployee;
