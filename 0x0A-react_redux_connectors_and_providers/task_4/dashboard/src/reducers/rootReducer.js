import courseReducer, { initialCourseState }  from './courseReducer';
import uiReducer, { initialState as initialUiState } from './uiReducer';
import notificationReducer, { initialState as initialNotificationState} from './notificationReducer';
import { Map } from 'immutable';

export const initialState = {
  courses: Map(initialCourseState),
  ui: Map(initialUiState),
  notifications: Map(initialNotificationState)
};

const rootReducer = {
  courses: courseReducer,
  ui: uiReducer,
  notifications: notificationReducer
};

export default rootReducer;
