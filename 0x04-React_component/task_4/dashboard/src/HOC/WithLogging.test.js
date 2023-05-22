import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

describe('WithLogging', () => {
  it('console.log called on mount and unmount with Component when wrapped element is pure html', () => {
    const spy = jest.spyOn(console, 'log');
    const Wrapped = WithLogging(() => <p />);
    const wrapper = shallow(<Wrapped />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it('console.log called on mount and unmount with the name of the component when wrapped element is Login component', () => {
    const spy = jest.spyOn(console, 'log');
    const Wrapped = WithLogging(Login);
    const wrapper = shallow(<Wrapped />);
    expect(spy).toHaveBeenCalledWith('Component Login is mounted');
    spy.mockRestore();
  });

  it('console.log called on mount and unmount with the name of the component when wrapped element is Notifications component', () => {
    const spy = jest.spyOn(console, 'log');
    const Wrapped = WithLogging(Notifications);
    const wrapper = shallow(<Wrapped />);
    expect(spy).toHaveBeenCalledWith('Component Notifications is mounted');
    spy.mockRestore();
  });
});
