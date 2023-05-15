import React, { Component, Fragment} from "react";
import './Notifications.css';

const NotificationItem = ({
  type,
  html,
  value
}) => {

  const getLi = () => {
    if (html) {
      return (
        <li data-priority={type} dangerouslySetInnerHTML={html}></li>
      );
    } else {
      return (
        <li data-priority={type}>{value}</li>
      );
    }
  };

  return (
    <Fragment>
      {getLi()}
    </Fragment>
  );
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
