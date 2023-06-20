import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/uiActionTypes";

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

/*
create a reducer function named uiReducer:

    DISPLAY_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to true
    HIDE_NOTIFICATION_DRAWER should set isNotificationDrawerVisible to false
    LOGIN_SUCCESS should set isUserLoggedIn to true
    LOGIN_FAILURE should set isUserLoggedIn to false
    LOGOUT should set isUserLoggedIn to false
*/

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    case LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};
