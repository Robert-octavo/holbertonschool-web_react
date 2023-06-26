import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARKS_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notificationsSchema";
import { Map, setIn } from "immutable";

const initialState = {
  notifications:[],
  filter: "DEFAULT",
  loading: false,
};

export default function notificationReducer(state = Map(initialState), action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const dataNotifications = notificationsNormalizer(action.data);
      Object.keys(dataNotifications.notifications).map(key => {
        dataNotifications.notifications[key].isRead = false;
      });
      return state.mergeDeep(dataNotifications);
    case MARKS_AS_READ:
      return setIn(state, ["notifications", action.index, "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case "SET_LOADING_STATE":
      return state.set("loading", action.loading);
    default:
      return state;
  }
};
