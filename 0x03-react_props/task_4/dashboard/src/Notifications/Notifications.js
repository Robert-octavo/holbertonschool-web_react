// Component Notifications
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import iconClose from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';


const printMessage = () => {
  console.log('Close button has been clicked');
}

const myStyle = {
  position: 'relative',
  float: 'right',
  top: '-60px',
  right: '-10px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
}

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={myStyle} aria-label='Close' onClick={printMessage}>
        <img src={iconClose} alt="Close" />
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        {/* <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li> */}
      </ul>
    </div>
  )
}

export default Notifications;
