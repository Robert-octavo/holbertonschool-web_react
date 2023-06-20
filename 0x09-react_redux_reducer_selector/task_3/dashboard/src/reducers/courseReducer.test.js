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
