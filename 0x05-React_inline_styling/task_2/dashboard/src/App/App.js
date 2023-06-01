import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleLogout);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleLogout);
  }

  handleLogout(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    /*Add a props named logOut with the props type being function*/
    const { logOut } = this.props;
    const { isLoggedIn } = this.props;
    /*When isLoggedIn is false, display the Login screen
    When isLoggedIn is true, display the CourseList screen*/
    let login = isLoggedIn ? <BodySectionWithMarginBottom title="Course List"><CourseList listCourses={listCourses}/></BodySectionWithMarginBottom> : <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>;
    return (
      <React.Fragment>
        <div className="App">
          <div className={css(styles.notification)}>
            <Notifications listNotifications={listNotifications}/>
            <Header />
          </div>
          <hr className={css(styles.hr)}></hr>      
          <div>{ login }</div>
          <hr className={css(styles.hr)}></hr>
          <BodySection title="News from the School">
            <p>Some random text</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  notification: {
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
});

/*
Create a property isLoggedIn. It should be false by default
*/
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
};