import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders application header', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
});
