import * as notifications from '../../notifications.json';


export default function getAllNotificationsByUser(userId) {
  const userNotifications = notifications.filter(
    (notification) => notification.author.id === userId
  );
  const context = userNotifications.map(
    (notification) => notification.context
  );
  return context;
};