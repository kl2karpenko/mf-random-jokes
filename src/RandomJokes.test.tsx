import { render, screen } from '@testing-library/react';
import React from 'react';
import RandomJokes from './RandomJokes';

test('renders random jokes component', () => {
  render(<RandomJokes />);
  const linkElement = screen.getByText(/Home Page!/i);
  expect(linkElement).toBeInTheDocument();
});
