import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import PropTypes from 'prop-types'; 
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import AppContext from './AppContext';
import { user, logOut } from '../App/AppContext';

import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: getLatestNotification()}},
];

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { displayDrawer: true, user: user, logOut: this.logOut, listNotifications: listNotifications };
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout);
  }

  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut = () => {
    this.setState({ user });
  }

  handleLogout(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  markNotificationAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
    /*the function is called, it remove the notification with that id from the list of notifications within the state*/
    this.setState({ listNotifications: this.state.listNotifications.filter((notification) => {return notification.id !== id}) });
  }

  render() {
    /*Add a props named logOut with the props type being function*/
    const { logOut, user, listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, hideNotificationDrawer, displayNotificationDrawer } = this.props;
    const value = { user, logOut };

    
    /*When isLoggedIn is false, display the Login screen
    When isLoggedIn is true, display the CourseList screen*/
    let login = isLoggedIn ? <BodySectionWithMarginBottom title="Course List"><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue"><Login logIn={this.logIn}/></BodySectionWithMarginBottom>;

    return (
      <AppContext.Provider value={value}>
        <React.Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.notification)}>
              <Notifications 
                listNotifications={listNotifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={displayNotificationDrawer}
                handleHideDrawer={hideNotificationDrawer}
                markNotificationAsRead={this.markNotificationAsRead}
              />
              <Header />
            </div>
            <hr className={css(styles.hr)}></hr>      
            <div>{ login }</div>
            {/* <hr className={css(styles.hr)}></hr> */}
            <BodySection title="News from the School">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores veritatis aperiam voluptatibus nulla officia aliquam provident rerum delectus ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui incidunt minima dolores, optio dolorum repellendus odit nulla. Obcaecati excepturi deserunt facilis eveniet error minus!
              </p>
            </BodySection>
            <Footer />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  notification: {
    '@media (max-width: 900px)': {
			display: "flex",
      flexDirection: "column",
		},
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    right: "0",
    margin: "1rem",
    padding: "1rem",
  },
  hr: {
    width: "100%",
    color: "#e0354b",
  },
  app: {
    '@media (max-width: 900px)': {
			paddingLeft: "10px",
      paddingRight: "10px",
		},
  }
});

/*
Create a function named mapStateToProps. This should connect
the uiReducer you created and the property isLoggedIn that your
component is already using
*/

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

/*
Create a property isLoggedIn. It should be false by default
*/
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
