/*

    It should import React
    It should export a function
    The function should return a div with the class Notifications
    The div should contain a paragraph with the text Here is the list of notifications
    import the file Notifications.css.
*/

import React from 'react';
import './Notifications.css';

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
    </div>
  )
}

export default Notifications;
