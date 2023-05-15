/*

    test that Notifications renders without crashing
    verify that Notifications renders three list items
    verify that Notifications renders the text Here is the list of notifications

*/

import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';
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
  it('renders three list items', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });
  it('renders the text Here is the list of notifications', () => {
    expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
  });
});
