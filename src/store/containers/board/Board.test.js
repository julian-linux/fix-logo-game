import React from 'react';
import { render, screen } from '../utils';
import Board from './index';

test('Renders the connected Board view with name', () => {
  render(<Board />, { initialState: { userStore: { name: 'user name' } } });
  expect(screen.getByText(/user name/i)).toBeInTheDocument();
});
