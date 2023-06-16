import * as notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(originalData, notification);

export default function getAllNotificationsByUser(userId) {
  const userNotifications = notifications.filter(
    (notification) => notification.author.id === userId
  );
  const context = userNotifications.map(
    (notification) => notification.context
  );
  return context;
};