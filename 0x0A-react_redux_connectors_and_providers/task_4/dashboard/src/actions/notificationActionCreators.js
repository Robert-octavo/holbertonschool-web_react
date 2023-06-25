import { MARKS_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: MARKS_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});
