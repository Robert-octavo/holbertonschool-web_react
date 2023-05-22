// Component Notifications
import React, { Component } from 'react';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import './Notifications.css';
import iconClose from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';


const printMessage = () => {
  console.log('Close button has been clicked');
}

const myStyle = {
  position: 'relative',
  float: 'right',
  top: '-30px',
  right: '-10px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
}


export default class Notifications extends Component {
  render() {
    const { displayDrawer } = this.props;
    const { listNotifications } = this.props;
    return (
      <div>
        <div className="menuItem">Your notifications</div>
        {/* check if displayDrawer is true display Notifications */}
        {displayDrawer && (
          <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button style={myStyle} aria-label='Close' onClick={printMessage}>
            <img src={iconClose} alt="Close" />
          </button>
          <ul>
            {listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
            {listNotifications.map((notification) => (<NotificationItem id={notification.id} key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={this.markAsRead} />))}
          </ul>
        </div>
        )}
      </div>
    )
  }
  /*Create a new markAsRead function within the Notifications
  class. It accepts one argument: id(number)*/
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
};

/*
prop to the Notifications component named displayDrawer:
    it should be a boolean
    by default it should be false
*/
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string
    }),
    value: PropTypes.string
  }))
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};
