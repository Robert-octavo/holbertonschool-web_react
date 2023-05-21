/*
four checks:

    It should contain the Notifications component
    It should contain the Header component
    It should contain the Login component
    It should contain the Footer component

    verify that App renders a div with the class App-footer
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
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
  });
  it('CourseList is displayed', () => {
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  it('Login is not displayed', () => {
    expect(wrapper.find(Login)).toHaveLength(0);
  });
});
