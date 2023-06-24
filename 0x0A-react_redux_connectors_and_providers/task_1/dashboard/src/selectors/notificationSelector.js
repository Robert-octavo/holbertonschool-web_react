const filterTypeSelected = (state) => {
  return state.get('filter');
};

const getNotifications = (state) => {
  return state.get('notifications');
};

const getUnreadNotifications = (state) => {
  const notifications = state.get('notifications');
  const unreadNotifications = notifications.filter(notification => notification.get('isRead') === false);
  return unreadNotifications;
};

export {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
};
