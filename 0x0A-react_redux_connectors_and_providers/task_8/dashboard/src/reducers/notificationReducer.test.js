import notificationReducer from "./notificationReducer";
import { notificationsNormalizer } from "../schema/notificationsSchema";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";
import { Map, fromJS } from "immutable";

describe("notificationReducer", () => {
  it("returns the default state when no action is passed", () => {
    const state = notificationReducer(undefined, {});
    expect(state.toJS()).toEqual({
      filter: "DEFAULT",
      notifications: []
    });
  });

  it("verifies that FETCH_NOTIFICATIONS_SUCCESS returns the data passed", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ];
    const state = notificationReducer(
      undefined,
      { type: FETCH_NOTIFICATIONS_SUCCESS, data }
    );
    expect(state.toJS()).toEqual({
      filter: "DEFAULT",
      notifications: notificationsNormalizer(data).notifications
    });
  });

  it("verifies that MARK_AS_READ returns the data passed", () => {
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
        isRead: false
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
        isRead: false
      }
    ];
    const state = notificationReducer(
      undefined,
      { type: FETCH_NOTIFICATIONS_SUCCESS, data }
    );
    const state2 = notificationReducer(
      state,
      { type: MARK_AS_READ, index: 2 }
    );
    expect(state2.toJS()).toEqual({
      filter: "DEFAULT",
      notifications: notificationsNormalizer(data).notifications.map((notification, index) => {
        if (index === 2) {
          notification.isRead = true;
        }
        return notification;
      })
    });
  });

  it("verifies that SET_TYPE_FILTER returns the data passed", () => {
    const state = notificationReducer(
      undefined,
      { type: SET_TYPE_FILTER, filter: "URGENT" }
    );
    expect(state.toJS()).toEqual({
      filter: "URGENT",
      notifications: []
    });
  });
});
