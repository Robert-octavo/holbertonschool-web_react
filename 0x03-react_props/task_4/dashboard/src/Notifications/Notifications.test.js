
import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('Notifications', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
  });
  it('renders the text Here is the list of notifications', () => {
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });
  it('renders the right html for the second NotificationItem element', () => {
    expect(wrapper.find(NotificationItem).at(1).html()).toEqual('<li data-priority="urgent">New resume available</li>');
  });
  it('check that the component renders NotificationItem elements', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });
});

/*
    Add a check that the menu item is being displayed when displayDrawer is false
    Add a check that the div.Notifications is not being displayed when displayDrawer is false
    Add a check that the menu item is being displayed when displayDrawer is true
    Add a check that the div.Notifications is being displayed when displayDrawer is true
*/

describe('Notifications test 2', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });
  it('menu item is being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });
  it('menu item is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });
  it('div.Notifications is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });
});
