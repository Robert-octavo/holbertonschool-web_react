// Component Notifications
import React, { Component } from 'react';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
//import './Notifications.css';
import iconClose from '../assets/close-icon.png'
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';


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

  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
    return false;
  }

  render() {
    const { displayDrawer } = this.props;
    const { listNotifications } = this.props;
    return (
      <div>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {/* check if displayDrawer is true display Notifications */}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
          <p className={css(styles.p)}>Here is the list of notifications</p>
          <button style={myStyle} aria-label='Close' onClick={printMessage}>
            <img src={iconClose} alt="Close" />
          </button>
          <ul className={css(styles.ul, styles.li, styles.dataProperty)}>
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


/*styles*/
const styles = StyleSheet.create({
  notifications: {
    padding: "1rem",
    border: "2px solid #e1484a",
    borderStyle: "dashed",
    width: "auto",
    height: "50%",
  },
  p: {
    margin: "0",
  },
  menuItem: {
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "right",
  },
  ul: {
    marginTop: "0.5rem",
    marginBottom: "0",
    paddingBottom: "0.5rem",
  },
  li: {
    'li:nth-child(3)': {
      fontWeight: "bold",
    },
  }, 
  dataProperty: {
    'li[data-priority="urgent"]': {
      color: "Red",
    },
    'li[data-priority="default"]': {
      color: "Blue",
    },
  },
});

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
  displayDrawer: true,
  listNotifications: []
};
