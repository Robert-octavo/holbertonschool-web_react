import { Map } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { notificationsNormalizer } from '../schema/notificationsSchema';
import { MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
  const initialState = Map({
    filter: 'DEFAULT',
    notifications: notificationsNormalizer([
      {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    ]).notifications,
  });

  it('verifies that filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('DEFAULT');
  });

  it('verifies that getNotifications returns a list of the message entities within the reducer', () => {
    const notifications = getNotifications(initialState);
    const expectedNotifications = [
      {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    ];
    expect(notifications).toEqual(expectedNotifications);
  });

  it('verifies that getUnreadNotifications return a list of the message entities within the reducer', () => {
    const notifications = getUnreadNotifications(initialState);
    const expectedNotifications = [
      {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New data available',
      },
    ];
    expect(notifications).toEqual(expectedNotifications);
  });
});
