import courseReducer from './courseReducer';
import coursesNormalizer from '../schema/courses';
import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';
import { Map, fromJS } from 'immutable';

describe('courseReducer', () => {
  const initialState = fromJS(coursesNormalizer([
    {
      id: 1,
      name: 'ES6',
      isSelected: false,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
      }
  ]));
  const data = [
    { id: 1, name: 'ES6' },
    { id: 2, name: 'Webpack' },
    { id: 3, name: 'React' }
  ];

  it('verifies that the default state returns the expected Map', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies that FETCH_COURSE_SUCCESS returns the expected state', () => {
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies that SELECT_COURSE returns the expected state', () => {
    const state = courseReducer(undefined, { type: SELECT_COURSE, index: 1 });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('verifies that UNSELECT_COURSE returns the expected state', () => {
    const state = courseReducer(undefined, { type: UNSELECT_COURSE, index: 1 });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

});


