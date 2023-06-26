import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE, SET_COURSES} from './courseActionTypes';
import fetch from 'node-fetch';

export default function selectCourse(index) {
  return { type: SELECT_COURSE, index };
};

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index };
};

export function setCourses(data) {
  return { type: SET_COURSES, data };
};

export function fetchCourses() {
  return async (dispatch) => {
    dispatch({ type: FETCH_COURSE });
    try {
      const res = await fetch('/courses.json');
      const data = await res.json();
      return dispatch(setCourses(data));
    } catch (err) {
      return console.log(err);
    }
  };
}