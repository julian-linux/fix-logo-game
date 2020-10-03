import React from 'react';
import { PrimaryButton } from './index';
import { shallow } from 'enzyme';

describe('Primary Button', () => {
  const mockFn = jest.fn();
  const tree = shallow(<PrimaryButton text="test button" onClick={mockFn} disabled={false} />);

  it('should be define', () => {
    expect(PrimaryButton).toBeDefined();
  });
  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('Should call a mock function', () => {
    tree.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have the correct props', () => {
    expect(tree.props().children[0].props.children).toEqual('test button');
    expect(tree.props().disabled).toEqual(false);
  });
});
