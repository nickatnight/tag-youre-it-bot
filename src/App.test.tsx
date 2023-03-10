import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome text', () => {
  render(<App />);
  const welcomeElement = screen.getByText(
    /Welcome to the TagYoureItBot frontend/i
  );
  expect(welcomeElement).toBeInTheDocument();
});
