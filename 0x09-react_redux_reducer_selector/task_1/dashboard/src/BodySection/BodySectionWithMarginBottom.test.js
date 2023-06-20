/*
Add one test checking that shallowing the component should render correctly a BodySection component and that the props are passed correctly to the child components.
*/

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  it('renders a <BodySectionWithMarginBottom /> component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <BodySectionWithMarginBottom /> component and checks contents', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>);
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).prop('title')).toEqual('test title');
    expect(wrapper.find(BodySection).prop('children')).toEqual(<p>test children node</p>);
  });
});
