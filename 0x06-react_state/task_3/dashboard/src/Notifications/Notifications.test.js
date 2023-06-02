
import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';

describe('Notifications', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(<Notifications />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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

/*
    Create a test, that will mockup the console.log function
    Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message
*/

describe('Notifications test 3', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(<Notifications />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('mockup the console.log function', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });
});

/*
    Add a test to verify that clicking on the menu item calls handleDisplayDrawer
    Add a test to verify that clicking on the button calls handleHideDrawer
*/

describe('Notifications test 4', () => {
  let wrapper;
  beforeEach(() => {
    const wrapper = shallow(<Notifications />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('handleDisplayDrawer', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleDisplayDrawer');
    instance.handleDisplayDrawer();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
  it('handleHideDrawer', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'handleHideDrawer');
    instance.handleHideDrawer();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
