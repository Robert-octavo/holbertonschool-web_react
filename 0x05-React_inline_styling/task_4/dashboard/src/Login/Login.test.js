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
