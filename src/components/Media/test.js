import React from 'react';
import { mount } from 'enzyme';

import Media from './';

describe('Media', () => {
  describe('Media.Item', () => {
    xit('supports custom tags', () => {
      const wrapper = mount(
        <Media tag="main">
          <Media.Item tag="aside">Hello</Media.Item>
        </Media>
      );

      expect(wrapper.find('main')).toHaveLength(1);
      expect(wrapper.find('main aside')).toHaveLength(1);
    });

    it('renders its children', () => {
      const wrapper = mount(
        <Media>
          <Media.Item>Hello</Media.Item>
        </Media>
      );

      expect(wrapper.children()).toHaveLength(1);
      expect(wrapper.text()).toEqual('Hello');
    });
  });

  describe('Media.Body', () => {
    xit('supports custom tags', () => {
      const wrapper = mount(
        <Media tag="main">
          <Media.Body tag="content">Hello</Media.Body>
        </Media>
      );

      expect(wrapper.find('main')).toHaveLength(1);
      expect(wrapper.find('main content')).toHaveLength(1);
    });

    it('renders its children', () => {
      const wrapper = mount(
        <Media>
          <Media.Body>Hello</Media.Body>
        </Media>
      );

      expect(wrapper.children()).toHaveLength(1);
      expect(wrapper.text()).toEqual('Hello');
    });
  });
});
