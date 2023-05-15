
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
