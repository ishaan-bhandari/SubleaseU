import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function NavigationBar() {
  return (
      <Navbar style={{backgroundColor: "black"}} className="custom-navbar">
          <Container>
              <Navbar.Brand className="text-white nav" bg="primary" href="/">SubleaseU</Navbar.Brand>
              <Nav className="align-items-center">
                  <Nav.Item>
                      <Button variant="primary" className="text-white nav btn-custom" href="/post-listing" id="post-button-1">Post Listing</Button>
                  </Nav.Item>
                  <Nav.Item>
                      <Button variant="primary" className="text-white nav btn-custom" href="/" id="post-button-2">View Listings</Button>
                  </Nav.Item>
                  <Nav.Item>
                      <Button variant="primary" className="text-white nav btn-custom" href="/messages" id="post-button-3">Messages</Button>
                  </Nav.Item>
              </Nav>
          </Container>
      </Navbar>
  );
};
  
export default NavigationBar;

//<Button variant="primary" className="text-white nav" style={{backgroundColor: "darkorange", borderColor: "darkorange"}}action="/post-listing" id="post-button">Post Listing</Button>