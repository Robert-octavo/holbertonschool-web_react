import { valueSeq } from 'immutable';

export const listCourses = (state) => {
  const courses = state.courses;
  if (courses) {
    return courses.valueSeq();
  }
  return courses;
}