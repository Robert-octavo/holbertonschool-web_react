/*

    test that App renders without crashing
    verify that App renders a div with the class App-header
    verify that App renders a div with the class App-body
    verify that App renders a div with the class App-footer
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').length).toEqual(1);
  });
  it('renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').length).toEqual(1);
  });
  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').length).toEqual(1);
  });
});
