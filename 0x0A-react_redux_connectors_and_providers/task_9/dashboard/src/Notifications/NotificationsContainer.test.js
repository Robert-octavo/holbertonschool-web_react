/*
It should make sure the fetching is happening on mount
*/

import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('Notifications', () => {
  it("verify that the function fetchNotifications is called when the component is mounted", () => {
    const mockFetchNotifications = jest.fn();
    const wrapper = shallow(<NotificationsContainer fetchNotifications={mockFetchNotifications} />);
    expect(mockFetchNotifications).toHaveBeenCalled();
    jest.restoreAllMocks();
  }
  );
});
