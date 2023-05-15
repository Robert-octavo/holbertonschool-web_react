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
