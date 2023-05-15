/*

    It should import React
    It should export a function
    The function should return a div with the class Notifications
    The div should contain a paragraph with the text Here is the list of notifications
    import the file Notifications.css.
*/

import React from 'react';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import iconClose from '../assets/close-icon.png'


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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
      </ul>
    </div>
  )
}

export default Notifications;
