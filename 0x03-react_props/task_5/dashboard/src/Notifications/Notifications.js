// Component Notifications
import React from 'react';
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


const Notifications = ( {displayDrawer} ) => {
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
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
      )}
    </div>
  )
};

/*
prop to the Notifications component named displayDrawer:
    it should be a boolean
    by default it should be false
*/
Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};


export default Notifications;
