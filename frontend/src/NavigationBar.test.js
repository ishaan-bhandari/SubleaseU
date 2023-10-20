import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './Navbar';

test('renders navbar with brand and buttons', () => {
    const { getByText } = render(<NavigationBar />);
    
    expect(getByText('SubleaseU')).toBeInTheDocument();
    expect(getByText('Post Listing')).toBeInTheDocument();
    expect(getByText('View Listings')).toBeInTheDocument();
    expect(getByText('Messages')).toBeInTheDocument();
});
