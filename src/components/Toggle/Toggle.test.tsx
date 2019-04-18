import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Toggle, { ToggleDisplay } from './Toggle';

describe('Component: Toggle', () => {
  /**
   * 1. Rendering & Visual Regression
   */
  it('should render', () => {
    const wrapper = mount(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });

  /**
   * 2. Interaktion
   */
  it('should toggle <ToggleDisplay />, after clicked', () => {
    const wrapper = mount(<Toggle />);
    expect(wrapper.find(ToggleDisplay).toHaveStyleRule('visibility', 'hidden'));
    // wrapper.simulate('click');
  });
});
