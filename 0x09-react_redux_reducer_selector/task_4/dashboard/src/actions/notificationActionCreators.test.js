import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe("notificationActionCreators", () => {
  it("markAsAread", () => {
    const data = markAsAread(1);

    expect(data).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });

  it("setNotificationFilter", () => {
    const data = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(data).toEqual({
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    });

    const data2 = setNotificationFilter(NotificationTypeFilters.URGENT);

    expect(data2).toEqual({
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    });
  });
});

