import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map, fromJS } from 'immutable';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import notificationsNormalizer from '../schema/notifications';

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<NotificationItem />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
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

/*

    The first check should verify that when updating the props of the component with the same list, the component doesn’t rerender
    The second check should verify that when updating the props of the component with a longer list, the component does rerender
*/

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<NotificationItem />);
    });
    it('should not rerender', () => {
        const wrapper = shallow(<NotificationItem listNotifications={listNotifications} />);
        const shouldComponentUpdate = jest.spyOn(
            NotificationItem.prototype,
            'shouldComponentUpdate'
        );
        wrapper.setProps({ listNotifications: listNotifications });
        expect(shouldComponentUpdate).toHaveBeenCalled();
        expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
    });
    it('should rerender', () => {
        const wrapper = shallow(<NotificationItem listNotifications={listNotifications} />);
        const shouldComponentUpdate = jest.spyOn(
            NotificationItem.prototype,
            'shouldComponentUpdate'
        );
        wrapper.setProps({ listNotifications: longerListNotifications });
        expect(shouldComponentUpdate).toHaveBeenCalled();
        expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
    });
});

/*
add two new tests:

    Clicking on the first button should call setNotificationFilter with URGENT
    Clicking on the second button should call setNotificationFilter with DEFAULT
*/  

describe('NotificationItem', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<NotificationItem />);
    });
    it('calls setNotificationFilter with URGENT', () => {
        const wrapper = shallow(<NotificationItem />);
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'setNotificationFilter');
        instance.forceUpdate();
        wrapper.find('#buttonFilterUrgent').simulate('click');
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('URGENT');
    });
    it('calls setNotificationFilter with DEFAULT', () => {
        const wrapper = shallow(<NotificationItem />);
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'setNotificationFilter');
        instance.forceUpdate();
        wrapper.find('#buttonFilterDefault').simulate('click');
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('DEFAULT');
    });
});
