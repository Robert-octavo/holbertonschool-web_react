/*
    Shallow render the Footer component to verify it renders without crashing
    Verify that the components at the very least render the text “Copyright”
*/

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { get } from 'jquery';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Footer', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<Footer />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists());
    });
    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
});

/*
Add a test to verify that the link is not displayed when the user is logged out within the context
Add a test to verify that the link is displayed when the user is logged in within the context
*/

describe('Footer', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<Footer />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('renders a div with the class App-footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
    it('renders a footer containing the text “Holberton School”', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('footer').text()).toContain('Holberton School');
    });
    it('does not render a link when the user is logged out', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('a')).toHaveLength(0);
    });
    it('renders a link when the user is logged in', () => {
        const wrapper = shallow(<Footer />);
        const context = { user: { isLoggedIn: true } };
        wrapper.setContext(context);
        expect(wrapper.find('a')).toHaveLength(1);
    });
});
