// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from './Navbar.js';
import Listing from './Listing.js';

test('NavigationBar renders correctly', () => {
  render(<NavigationBar />);

  // Test that the Navbar Brand and Home links are present
  expect(screen.getByText('Our website name')).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();

  // Test that the Post link is present
  expect(screen.getByText('Post')).toBeInTheDocument();
});

test('Listing renders correctly', () => {
  render(<Listing />);

  // Test that the placeholder email, address, and description are present
  expect(screen.getByText('example@gmail.com')).toBeInTheDocument();
  expect(screen.getByText('1234 E Green St')).toBeInTheDocument();
  expect(screen.getByText('blah blah blah')).toBeInTheDocument();
});