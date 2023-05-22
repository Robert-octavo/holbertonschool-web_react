import React, { Component, Fragment} from "react";
import PropTypes from "prop-types";
import './Notifications.css';

export default class NotificationItem extends Component {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    //const getLi = () => {
      if (html) {
        return (
          <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => {markAsRead(id)}}></li>
        );
      } else {
        return (
          <li data-priority={type} onClick={() => {markAsRead(id)}}>{value}</li>
        );
      }
    //};

    // return (
    //   <Fragment>
    //     {getLi()}
    //   </Fragment>
    // );
  }
}
;

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  //html: {__html: ''},
  markAsRead: () => {}
};
