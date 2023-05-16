/*

    Check that it renders CourseList component without crashing
    Check that it renders the 5 different rows
*/

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import CourseList from '../CourseList/CourseList';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders a CourseList component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
  it('CourseList it renders the 5 different rows', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList).children()).toHaveLength(5);
  });
});
