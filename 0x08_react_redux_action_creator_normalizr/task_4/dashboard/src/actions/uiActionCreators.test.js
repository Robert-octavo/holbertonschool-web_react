/*
add test from each action creator in uiActionCreators.js
*/

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("uiActionCreators", () => {
  it("login", () => {
    const data = login('holberton@holberton.com', '123456789');

    expect(data).toEqual({
      type: LOGIN,
      user: {
        email: 'holberton@holberton.com',
        password: '123456789'
      }
    });
  });

  it("logout", () => {
    const data = logout();

    expect(data).toEqual({
      type: LOGOUT
    });
  });

  it("displayNotificationDrawer", () => {
    const data = displayNotificationDrawer();

    expect(data).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER
    });
  });

  it("hideNotificationDrawer", () => {
    const data = hideNotificationDrawer();

    expect(data).toEqual({
      type: HIDE_NOTIFICATION_DRAWER
    });
  });
});
