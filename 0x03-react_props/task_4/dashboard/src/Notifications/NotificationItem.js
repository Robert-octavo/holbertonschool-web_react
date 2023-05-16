import React, { Component, Fragment} from "react";
import PropTypes from "prop-types";
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

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
