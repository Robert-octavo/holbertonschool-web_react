import './App.css';
import React from 'react';
import PropTypes from 'prop-types'; 

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App( { isLoggedIn } ) {
  /*When isLoggedIn is false, display the Login screen
When isLoggedIn is true, display the CourseList screen*/ 
  let login = isLoggedIn ? <CourseList /> : <Login />;
  return (
    <React.Fragment>
      <div className="App">
        <div className="notification-container">
          <Notifications />
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
  isLoggedIn: true
};

export default App;
