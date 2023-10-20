import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders initial message', () => {
    const { getByText } = render(<App />);
    const messageElement = getByText(/Current Listings:/i);
    expect(messageElement).toBeInTheDocument();
});
