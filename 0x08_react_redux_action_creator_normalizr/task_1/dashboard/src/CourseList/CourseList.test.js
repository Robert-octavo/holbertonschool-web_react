/*

    Check that it renders CourseList component without crashing
    Check that it renders the 5 different rows
*/

import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CourseList />);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders a CourseList component', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists());
  });
  it('CourseList it renders the 2 different rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toEqual(2);
  });
});
