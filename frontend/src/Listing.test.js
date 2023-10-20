import React from 'react';
import { render } from '@testing-library/react';
import Listing from './Listing';

test('renders listing with props', () => {
    const mockProps = {
        img_address: "test_image.jpg",
        address: "Test Address",
        description: "Test Description",
        email: "test@example.com",
        rent: "1000"
    };

    const { getByText, getByAltText } = render(<Listing {...mockProps} />);
    
    expect(getByAltText('top')).toHaveAttribute('src', mockProps.img_address);
    expect(getByText(mockProps.address)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
    expect(getByText(mockProps.email)).toBeInTheDocument();
});
