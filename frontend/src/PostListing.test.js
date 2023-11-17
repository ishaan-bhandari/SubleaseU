import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import AddressForm from './AddressForm';
import axios from 'axios';

// Mock the axios library
jest.mock('axios');

// Mock the Navbar component since it's not being tested here
jest.mock('./Navbar.js', () => () => <div>Navbar</div>);

describe('AddressForm', () => {
  beforeEach(() => {
    // Clear all inputs before each test
    axios.post.mockClear();
  });

  test('inputs should be initially empty', () => {
    render(<AddressForm />);
    
    expect(screen.getByPlaceholderText('Enter address')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter rent')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter image address')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter description')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter E-mail')).toHaveValue('');
  });

  test('allows users to input data into form fields', () => {
    render(<AddressForm />);

    userEvent.type(screen.getByPlaceholderText('Enter address'), '123 Test St');
    userEvent.type(screen.getByPlaceholderText('Enter rent'), '1000');
    userEvent.type(screen.getByPlaceholderText('Enter image address'), 'http://example.com/image.jpg');
    userEvent.type(screen.getByPlaceholderText('Enter description'), 'Nice place to live!');
    userEvent.type(screen.getByPlaceholderText('Enter E-mail'), 'test@example.com');

    expect(screen.getByPlaceholderText('Enter address')).toHaveValue('123 Test St');
    expect(screen.getByPlaceholderText('Enter rent')).toHaveValue('1000');
    expect(screen.getByPlaceholderText('Enter image address')).toHaveValue('http://example.com/image.jpg');
    expect(screen.getByPlaceholderText('Enter description')).toHaveValue('Nice place to live!');
    expect(screen.getByPlaceholderText('Enter E-mail')).toHaveValue('test@example.com');
  });

  test('submits form data correctly', async () => {
    render(<AddressForm />);
    
    // Mock axios.post to resolve to a certain value
    axios.post.mockResolvedValue({ data: 'Listing created' });

    userEvent.type(screen.getByPlaceholderText('Enter address'), '123 Test St');
    userEvent.type(screen.getByPlaceholderText('Enter rent'), '1000');
    userEvent.type(screen.getByPlaceholderText('Enter image address'), 'http://example.com/image.jpg');
    userEvent.type(screen.getByPlaceholderText('Enter description'), 'Nice place to live!');
    userEvent.type(screen.getByPlaceholderText('Enter E-mail'), 'test@example.com');
    
    fireEvent.click(screen.getByText('Submit'));

    expect(axios.post).toHaveBeenCalledWith('/post-listing', {
      address: '123 Test St',
      rent: '1000',
      img_address: 'http://example.com/image.jpg',
      description: 'Nice place to live!',
      email: 'test@example.com',
    });
  });

  test('handles server error correctly', async () => {
    render(<AddressForm />);

    // Mock a rejected value to simulate server error
    const errorMessage = 'Network Error';
    axios.post.mockRejectedValue(new Error(errorMessage));

    userEvent.type(screen.getByPlaceholderText('Enter address'), '123 Test St');
    fireEvent.click(screen.getByText('Submit'));

    await screen.findByText(errorMessage);
  });
});
