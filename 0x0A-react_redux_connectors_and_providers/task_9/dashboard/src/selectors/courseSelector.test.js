import { Map, fromJS } from 'immutable';
import { listCourses } from './courseSelector';

describe('Test courseSelector.js', () => {
  const state = {
    courses: Map({
      '1': fromJS({ id: 1, name: 'ES6', credit: 60 }),
      '2': fromJS({ id: 2, name: 'Webpack', credit: 20 }),
      '3': fromJS({ id: 3, name: 'React', credit: 40 }),
    }),
  };

  it('verifies that the listCourses function returns a list of courses', () => {
    const courses = listCourses(state);
    expect(courses.toJS()).toEqual([
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ]);
  });
});
