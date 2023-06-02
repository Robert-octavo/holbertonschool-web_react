// Component Notifications
import React, { PureComponent } from 'react';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
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


export default class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  /*shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer
    );
  }*/

  render() {
    const {
      listNotifications, 
      displayDrawer, 
      handleDisplayDrawer, 
      handleHideDrawer, 
      markNotificationAsRead 
    } = this.props;
    
    console.log('after render',{displayDrawer});
    return (
      <div>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        {/* check if displayDrawer is true display Notifications */}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p className={css(styles.p)}>Here is the list of notifications</p>
            <button style={myStyle} aria-label='Close' onClick={handleHideDrawer}>
              <img src={iconClose} alt="Close" />
            </button>
            <ul className={css(styles.ul, styles.li, styles.dataProperty)}>
              {listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={markNotificationAsRead} />) : <></>}
              {listNotifications.map((notification) => (
                <NotificationItem 
                  id={notification.id}
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
                />
                ))
              }
            </ul>
          </div>
        )}
      </div>
    )
  }
  /*Create a new markAsRead function within the Notifications
  class. It accepts one argument: id(number)
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }*/
};


/*styles*/
const styles = StyleSheet.create({
  notifications: {
    '@media (max-width: 900px)': {
      zIndex: '10',
      backgroundColor: 'white',
			border: 'none',
      padding: '0',
      margin: '0',	
      width: '100vh',
      height: '100vh',
      fontSize: '20px',
		},
    padding: "1rem",
    border: "2px solid #e1484a",
    borderStyle: "dashed",
    width: "auto",
    height: "50%",
  },
  p: {
    '@media (max-width: 900px)': {
      marginBottom: '0.5rem',
      display: 'block'
    },
    margin: "0",
  },
  menuItem: {
    '@media (max-width: 900px)': {
			marginTop: '0.5rem',
      fontSize: '20px',
		},
    marginBottom: "10px",
    fontWeight: "bold",
    textAlign: "right",
  },
  ul: {
    '@media (max-width: 900px)': {
      margin: '0',
      padding: '0',
      listStyle: 'none',
    },
    marginTop: "0.5rem",
    marginBottom: "0",
    paddingBottom: "0.5rem",
  },
  li: {
    'li:nth-child(3)': {
      fontWeight: "bold",
    },
  }, 
  displayNone: {
    display: "none",
  }
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
  })),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};
