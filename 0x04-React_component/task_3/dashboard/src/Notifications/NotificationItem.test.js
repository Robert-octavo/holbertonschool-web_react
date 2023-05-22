/*

    Verify that the basic rendering of the component works without crashing
    Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)
    Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
*/

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<NotificationItem />);
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    it('renders a list item', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.find('li').length).toEqual(1);
    });
    it('renders a list item with the right text', () => {
        const wrapper = shallow(<NotificationItem value="test" />);
        expect(wrapper.find('li').text()).toEqual('test');
    });
});


/*
    Create a test, that will pass a spy as the markAsRead property
    Check that when simulating a click on the component, the spy is called with the right ID argument
*/

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<NotificationItem />);
    });
    it('calls markAsRead when clicked', () => {
        const wrapper = shallow(<NotificationItem />);
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'markAsRead');
        instance.forceUpdate();
        wrapper.find('li').simulate('click');
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(1);
    });
});
