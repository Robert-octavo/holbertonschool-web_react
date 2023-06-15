import { Seq } from 'immutable';


export default function printBestStudents(grades) {
  const seq = Seq(grades);
  const filtered = seq.filter((student) => {
    return student.score > 70
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const obj = filtered.toJS();

  for (const key in obj) {
    if (key) {
      obj[key].firstName = capitalizeFirstLetter(obj[key].firstName);
      obj[key].lastName = capitalizeFirstLetter(obj[key].lastName);
    }
  };

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
  },
};

printBestStudents(grades);
