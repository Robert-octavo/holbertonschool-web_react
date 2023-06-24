import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('render Notifications component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('render Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists());
  });
  it('render Login component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });
  it('render Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists());
  });
});

/*Add a test to check that CourseList is not displayed*/
describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('CourseList is not displayed', () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
});

/*Describe a new case, when isLoggedIn is true, and add two checks. The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included.*/

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App isLoggedIn={true} />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('CourseList is displayed', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  it('Login is not displayed', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });
});

/*Add a test to check that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out*/

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('logOut function is called', () => {
    const logOut = jest.fn(() => void(0));
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: true });
    //document.dispatchEvent(event);
    expect(logOut).toHaveBeenCalled();
    expect(logOut).toHaveBeenCalledWith('Logging you out');
  });
});

/*

    Add a test to verify that the default state for displayDrawer is false. Verify that after calling handleDisplayDrawer, the state should now be true
    Add a test to verify that after calling handleHideDrawer, the state is updated to be false
*/

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('default state for displayDrawer is false', () => {
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it('handleDisplayDrawer', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  it('handleHideDrawer', () => {
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
});

/*
Add a test to verify that markNotificationAsRead works as intended. You can for example set the state with a mock list of notifications, then call the function and verify that the state of the container has been updated <correctly></correctly>
*/

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('markNotificationAsRead', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    const id = 1;
    const notifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
      {
        id: 3,
        type: 'urgent',
        html: { __html: getLatestNotification() },
      },
    ];
    wrapper.setState({ notifications: notifications });
    instance.markNotificationAsRead(id);
    expect(wrapper.state().notifications[0].isRead).toEqual(true);
  });
});

/*
    reate a new suite to test the function
    Create a test that verify that the function
    returns the right object when passing the

let state = fromJS({
  isUserLoggedIn: true
});
*/

describe('mapStateToProps', () => {
  it('returns the right object when passing the state', () => {
    const state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});
