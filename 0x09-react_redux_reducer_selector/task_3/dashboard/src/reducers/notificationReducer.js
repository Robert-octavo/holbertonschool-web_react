import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARKS_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { NotificationTypeFilters } from "../actions/notificationActionTypes";

const initialState = {
  notifications: [],
  filter: "DEFAULT"
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map(notification => ({
          ...notification,
          isRead: false
        }))
      };
    case MARKS_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : { ...notification }
        )
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}