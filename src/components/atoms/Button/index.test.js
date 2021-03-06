import React from 'react';
import {shallow} from 'enzyme';
import mock from 'jest-mock';
import expect from 'expect';
import {beforeEach} from "../../../../private/storybook/facade";

import {Button} from './index';
import Icon from '../Icon';

const clickFn = mock.fn();
const buttonText = 'Button';
const iconType = 'alert';

let component;

export default describe('Button', () => {
  beforeEach(() => {
    component = shallow(<Button onClick={clickFn}>{buttonText}</Button>);
  });

  it('should render text', () => {
    expect(component.text()).toBe(buttonText);
  });

  it('should call function on click', () => {
    component.simulate('click');

    expect(clickFn).toHaveBeenCalled();
  });

  it('should render an icon if has icon prop', () => {
    component = shallow(
      <Button onClick={clickFn} icon={iconType}>{buttonText}</Button>
    );

    expect(component.find(Icon)).toHaveLength(1);
    expect(component.find(Icon).first().prop('type')).toBe(iconType);
  });
});
