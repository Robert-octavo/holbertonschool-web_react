/*

    When isHeader is true
        Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist
        Add a check to test the component renders two cells when textSecondCell is present
    When isHeader is false
        Add a check to test the component renders correctly two td elements within a tr element
*/

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CourseListRow />);
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow />);
        expect(wrapper.exists());
    });
    it('renders a row with two cells when isHeader is false and textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell={'test'} textSecondCell={'test'} />);
        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(2);
    });
    it('renders a row with one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'test'} />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('[colSpan="2"]')).toHaveLength(1);
    });
    it('renders a row with two cells when isHeader is true and textSecondCell exists', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell={'test'} textSecondCell={'test'} />);
        expect(wrapper.find('th')).toHaveLength(2);
    });
});
