/*

    Shallow render the Footer component to verify it renders without crashing
    Verify that the components at the very least render the text “Copyright”
*/

import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { get } from 'jquery';
//import { StyleSheetTestUtils } from 'aphrodite';

describe('Footer', () => {
    let wrapper;
    beforeEach(() => {
        const wrapper = shallow(<Footer />);
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
