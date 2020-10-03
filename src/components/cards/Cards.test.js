import React from 'react';
import { UsedCard } from './index';
import { shallow } from 'enzyme';

describe('Used Card', () => {
  const tree = shallow(<UsedCard />);

  it('should be define', () => {
    expect(UsedCard).toBeDefined();
  });
  it('should render correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
