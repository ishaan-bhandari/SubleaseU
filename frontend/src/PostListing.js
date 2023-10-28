// AddressForm.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './/Navbar.js'
import axios from "axios";


function AddressForm() {
  const [address, setAddress] = useState('');
  const [rent, setRent] = useState('');
  const [imageAddress, setImageAddress] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const listingData = {
      address,
      rent,
      imageAddress,
      description,
    };
  
    try {
      const response = await axios.post('/post-listing', listingData);
      // Handle the response as needed (e.g., show a success message)
      console.log('Response from server:', response.data);
  
      // Clear the form fields
      setAddress('');
      setRent('');
      setImageAddress('');
      setDescription('');
    } catch (error) {
      // Handle any errors, e.g., show an error message
      console.error('Error sending data:', error);
    }
  };
  

  return (
    <div>
    <NavigationBar />
    <div style={{background: 'linear-gradient(130deg, #13294B, #a33b00)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Form style={{ maxWidth: '800px', color: 'white'}} onSubmit={handleSubmit}>
        <h1>Post Listing!</h1>
      <Form.Group>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Rent (USD)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter rent"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Image Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image address"
          value={imageAddress}
          onChange={(e) => setImageAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default AddressForm;
