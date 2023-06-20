import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('verifies the state returned by the uiReducer function equals the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({ ...initialState, isNotificationDrawerVisible: true });
  });

  it('verifies the state returned by the uiReducer function, when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const state = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state).toEqual({ ...initialState, isNotificationDrawerVisible: false });
  });

  it('verifies the state returned by the uiReducer function, when the action LOGIN_SUCCESS is passed, changes correctly the isUserLoggedIn property', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state).toEqual({ ...initialState, isUserLoggedIn: true });
  });

  it('verifies the state returned by the uiReducer function, when the action LOGIN_FAILURE is passed, changes correctly the isUserLoggedIn property', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
  });

  it('verifies the state returned by the uiReducer function, when the action LOGOUT is passed, changes correctly the isUserLoggedIn property', () => {
    const state = uiReducer(undefined, { type: LOGOUT });
    expect(state).toEqual({ ...initialState, isUserLoggedIn: false });
  });
});
