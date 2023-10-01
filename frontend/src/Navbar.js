import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
  
function NavigationBar() {
  return (
    <Navbar className="custom-navbar">
        <Container>
            <Navbar.Brand className="text-white nav" bg="primary" href="/">Our website name</Navbar.Brand>
            <Nav.Link className="text-white nav" href="/">Home</Nav.Link>
            <Nav.Link className="text-white nav" href="/post-listing">Post</Nav.Link>
        </Container>
    </Navbar>
  );
};
  
export default NavigationBar;