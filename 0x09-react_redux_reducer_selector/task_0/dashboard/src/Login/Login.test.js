/*

    Shallow render the Login component to verify it renders without crashing
    Verify that the components renders 2 input tags and 2 label tags
*/

import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists());
    });
    it('renders 2 input tags and 2 label tags', () => {
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
    }
);

/*
    Add a test to verify that the submit button is disabled by default
    Add a test to verify that after changing the value of the two inputs, the button is enabled
    To simulate an input change, you can use the simulate method and use the change event
*/

describe('Login', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Login />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('button').prop('disabled')).toEqual(true);
    });
    it('after changing the value of the two inputs, the button is enabled', () => {
        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: '' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '' } });
        expect(wrapper.find('button').prop('disabled')).toEqual(true);

        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'robert@hotmail.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '' } });
        expect(wrapper.find('button').prop('disabled')).toEqual(true);

        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: '' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '12345' } });
        expect(wrapper.find('button').prop('disabled')).toEqual(true);

        wrapper.find('input[type="email"]').simulate('change', { target: { name: 'email', value: 'robert@hotmail.com' } });
        wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: '123456' } });
        expect(wrapper.find('button').prop('disabled')).toEqual(false);
    });
    }
);    
