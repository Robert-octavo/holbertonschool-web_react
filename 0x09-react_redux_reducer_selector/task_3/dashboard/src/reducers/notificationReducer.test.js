import notificationReducer from "./notificationReducer";
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER
} from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  it("returns the default state when no action is passed", () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual({
      notifications: [],
      filter: "DEFAULT"
    });
  });

  it("returns the correct state for FETCH_NOTIFICATIONS_SUCCESS", () => {
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
    const newState = notificationReducer(undefined, {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data
    });
    expect(newState).toEqual({
      notifications: [
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
      ],
      filter: "DEFAULT"
    });
  });

  it("returns the correct state for MARK_AS_READ", () => {
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
    const newState = notificationReducer(
      {
        notifications: data,
        filter: "DEFAULT"
      },
      {
        type: MARK_AS_READ,
        index: 2
      }
    );
    expect(newState).toEqual({
      notifications: [
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
          isRead: true
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
          isRead: false
        }
      ],
      filter: "DEFAULT"
    });
  });

  it("returns the correct state for SET_TYPE_FILTER", () => {
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
    const newState = notificationReducer(
      {
        notifications: data,
        filter: "DEFAULT"
      },
      {
        type: SET_TYPE_FILTER,
        filter: "URGENT"
      }
    );
    expect(newState).toEqual({
      notifications: [
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
      ],
      filter: "URGENT"
    });
  });
});
