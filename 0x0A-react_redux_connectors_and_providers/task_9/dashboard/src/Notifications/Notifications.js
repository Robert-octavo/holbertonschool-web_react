// Component Notifications
import React, { PureComponent } from 'react';
import { getLatestNotification } from '../utils/utils';
import { connect } from 'react-redux';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';
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

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      listNotifications, 
      displayDrawer, 
      handleDisplayDrawer, 
      handleHideDrawer, 
      markNotificationAsRead,
      setNotificationFilter
    } = this.props;
    
    console.log('after render',{displayDrawer});
    return (
      <div>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        {/* check if displayDrawer is true display Notifications */}
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <p className={css(styles.p)}>Here is the list of notifications</p>
            <button
            type='button'
            className={css(styles.filterButton)}
            id='buttonFilterUrgent'
            onClick={() => setNotificationFilter('URGENT')}
            >
            ‼️
            </button>
            <button
            type='button'
            className={css(styles.filterButton)}
            id='buttonFilterDefault'
            onClick={() => setNotificationFilter('DEFAULT')}
            >
            ?
            </button>
            <button style={myStyle} aria-label='Close' onClick={handleHideDrawer}>
              <img src={iconClose} alt="Close" />
            </button>
            <ul className={css(styles.ul, styles.li, styles.dataProperty)}>
              {listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={markNotificationAsRead} />) : <></>}
              {listNotifications.valueSeq().map((notification) => (
                <NotificationItem 
                  id={notification.get('id')}
                  key={notification.get('id')}
                  type={notification.get('type')}
                  value={notification.get('value')}
                  html={notification.get('html')}
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
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  setNotificationFilter: () => {}
};

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state)
  }
};

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead,
  setNotificationFilter
};

export const ConnectedNotifications = connect(mapStateToProps, mapDispatchToProps)(Notifications);
