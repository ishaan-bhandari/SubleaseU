import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Messages from './Messages';

describe('Messages component', () => {
  test('renders the Messages page', () => {
    render(<Messages />);
    expect(screen.getByText('Messages Page')).toBeInTheDocument();
  });

  test('allows the user to compose a message', () => {
    render(<Messages />);

    // Switch to the Compose tab
    userEvent.click(screen.getByText('Compose'));

    // Fill out the message form
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'test@example.com');
    userEvent.type(screen.getByLabelText('Message:'), 'Hello, this is a test message.');

    // Send the message
    fireEvent.click(screen.getByText('Send'));

    // Check if the message has been added to the sent messages tab
    userEvent.click(screen.getByText('Sent'));
    expect(screen.getByText('To: test@example.com - Message: Hello, this is a test message.')).toBeInTheDocument();
  });

  test('clears the message form after sending', () => {
    render(<Messages />);

    // Switch to the Compose tab and fill out the form
    userEvent.click(screen.getByText('Compose'));
    userEvent.type(screen.getByPlaceholderText('Enter email'), 'test@example.com');
    userEvent.type(screen.getByLabelText('Message:'), 'Hello, this is a test message.');

    // Send the message
    fireEvent.click(screen.getByText('Send'));

    // Check if the form fields have been reset
    expect(screen.getByPlaceholderText('Enter email')).toHaveValue('');
    expect(screen.getByLabelText('Message:')).toHaveValue('');
  });

  test('renders sent messages correctly', () => {
    render(<Messages />);

    // Check if the sent messages are rendered
    userEvent.click(screen.getByText('Sent'));
    expect(screen.getByText('To: user@example.com - Message:')).toBeInTheDocument();
    expect(screen.getByText('To: user2@example.com - Message:')).toBeInTheDocument();
  });
});

