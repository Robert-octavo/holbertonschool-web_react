/*
suite for the new reducer. Define the following tests:

    Test that the default state returns an empty array
    Test that FETCH_COURSE_SUCCESS returns the data passed
    Test that SELECT_COURSE returns the data with the right item updated
    Test that UNSELECT_COURSE returns the data with the right item updated
*/  

import courseReducer from './courseReducer';
import { 
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('returns the default state when no action is passed', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('returns the correct state for FETCH_COURSE_SUCCESS', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false
      }
    ];
    const newState = courseReducer(undefined, {
      type: FETCH_COURSE_SUCCESS,
      data
    });
    expect(newState).toEqual(data);
  });

  it('returns the correct state for SELECT_COURSE', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false
      }
    ];
    const newState = courseReducer(data, {
      type: SELECT_COURSE,
      index: 1
    });
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: true
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false
      }
    ]);
  });

  it('returns the correct state for UNSELECT_COURSE', () => {
    const data = [
      {
        id: 1,
        name: 'ES6',
        isSelected: true
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false
      }
    ];
    const newState = courseReducer(data, {
      type: UNSELECT_COURSE,
      index: 1
    });
    expect(newState).toEqual([
      {
        id: 1,
        name: 'ES6',
        isSelected: false
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false
      }
    ]);
  });
});
