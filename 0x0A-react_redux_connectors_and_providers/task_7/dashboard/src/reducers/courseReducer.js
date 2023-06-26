import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE
} from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

export const initialState = [];

export default function courseReducer(state = Map(initialState), action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const courses = coursesNormalizer(action.data);
      Object.keys(courses).map(key => {
        courses[key].isSelected = false;
      });
      return state.merge(courses);
    case SELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
};
