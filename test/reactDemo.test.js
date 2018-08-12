import React from 'react';
import {mount, configure } from 'enzyme';
import sinon from 'sinon';
import Demo from '../src/reactDemo';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('React UI test', () => {
  it('should have title', () => {
    // enzyme find
    const wrapper = mount(<Demo />);
    const title = wrapper.find('h1');
    // jest toHaveLength
    expect(title).toHaveLength(1);
    expect(title.text()).toBe('This is a demo');
  })

  it('should add 1 when click button', () => {
    // enzyme
    const wrapper = mount(<Demo />);
    const counter = wrapper.find('.counter');
    const v1 = parseInt(counter.text());
    wrapper.find('button').simulate('click');
    const v2 = parseInt(counter.text());
    // jest
    expect(v2).toBe(v1 + 1);
  })

  it('should change when input number', () => {
    // enzyme
    const wrapper = mount(<Demo />);
    const counter = wrapper.find('.counter');
    wrapper.find('input').simulate('change', {
      target: {
        value: 5
      }
    })
    // jest
    expect(counter.text()).toBe('5');
  })

  it('should change when props change', () => {
    // enzyme
    const wrapper = mount(<Demo title='Demo' value={5} />)
    sinon.spy(Demo.prototype, 'componentWillReceiveProps')
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Demo');
    wrapper.setProps({
      title: 'Demo2'
    });
    // jest
    expect(title.text()).toBe('Demo2');
    // sinon
    const callCount = Demo.prototype.componentWillReceiveProps.callCount;
    // jest
    expect(callCount).toBe(1);
  })
})
