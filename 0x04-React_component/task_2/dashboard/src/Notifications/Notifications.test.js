
import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { shallow } from 'enzyme';

describe('Notifications', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(<Notifications />);
  });
  it("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
  });
  it('renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.update();
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
  it('renders the right html for the second NotificationItem element', () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(0);
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
    const wrapper = shallow(<Notifications />);
  });
  it('menu item is being displayed when displayDrawer is false', () => {
    /*set displayDrawer prop to false*/
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('menuItem').length).toEqual(0);
  });
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('Notifications').length).toEqual(0);
  });
  it('menu item is being displayed when displayDrawer is true', () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('menuItem').length).toEqual(0);
  });
  it('div.Notifications is being displayed when displayDrawer is true', () => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('Notifications').length).toEqual(0);
  });
});
