import React from 'react';
import { PrimaryInput } from './index';
import { shallow } from 'enzyme';

describe('Primary Button', () => {
  const mockFn = jest.fn();
  const tree = shallow(<PrimaryInput placeholder="placeholder" onChange={mockFn} value="" />);

  it('should be define', () => {
    expect(PrimaryInput).toBeDefined();
  });
  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
  it('Should call a mock function', () => {
    tree.simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });

  it('should have correct props', () => {
    expect(tree.props().placeholder).toEqual('placeholder');
    expect(tree.props().value).toEqual('');
  });
});
