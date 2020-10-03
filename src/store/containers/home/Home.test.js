import React from 'react';
import { render, screen } from '../utils';
import Home from './index';

describe('Renders the connected Home view correctly', () => {
  it("should containe an element with the let's go text", () => {
    render(<Home />, { initialState: { userStore: { name: '' } } });
    expect(screen.getByText("Let's go")).toBeInTheDocument();
  });
  it("should containe an element with the 'Your name here' placeholder", () => {
    render(<Home />, { initialState: { userStore: { name: '' } } });
    expect(screen.getByPlaceholderText('Your name here')).toBeInTheDocument();
  });
});
