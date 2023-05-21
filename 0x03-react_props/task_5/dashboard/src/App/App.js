import './App.css';
import React from 'react';
import PropTypes from 'prop-types'; 
import { getLatestNotification } from '../utils/utils';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

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

function App( { isLoggedIn } ) {
  /*When isLoggedIn is false, display the Login screen
When isLoggedIn is true, display the CourseList screen*/ 
  let login = isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login />;
  return (
    <React.Fragment>
      <div className="App">
        <div className="notification-container">
          <Notifications listNotifications={listNotifications}/>
          <Header />
        </div>
        <hr></hr>      
        <div>{ login }</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

/*
Create a property isLoggedIn. It should be false by default
*/
App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
