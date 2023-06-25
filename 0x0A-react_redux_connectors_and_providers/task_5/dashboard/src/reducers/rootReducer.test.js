import { Map } from 'immutable';
import rootReducer from './rootReducer';
import { combineReducers } from 'redux';

describe('rootReducer', () => {
  it('returns the initial state when no action is passed', () => {
    const result = rootReducer(undefined, {});
    expect(result).toEqual({
      courses: Map(initialCourseState),
      ui: Map(initialUiState),
      notifications: Map(initialNotificationState),
    });
  });
  it('verifies that the combineReducers returns the right object', () => {
    const result = combineReducers(rootReducer(undefined, {}));
    expect(result).toEqual({
      courses: Map(initialCourseState),
      ui: Map(initialUiState),
      notifications: Map(initialNotificationState),
    });
  });
});
