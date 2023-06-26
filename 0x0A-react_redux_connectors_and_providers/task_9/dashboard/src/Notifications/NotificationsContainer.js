import React, { Component } from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';


export class NoticationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return (
      <Notifications {...this.props} />
    );
  };  
}

NoticationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {}
};

NoticationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.Object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  fetchNotifications: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    listNotifications: getUnreadNotifications(state)
  }
}

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(NoticationsContainer);
