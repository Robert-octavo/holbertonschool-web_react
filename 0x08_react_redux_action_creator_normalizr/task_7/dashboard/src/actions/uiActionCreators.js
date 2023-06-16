import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  user: data
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch(`http://localhost:3000/login-success.json`);
      const data = await response.json();
      return dispatch(loginSuccess(data));
    } catch {
      return dispatch(loginFailure());
    }
  };
};
