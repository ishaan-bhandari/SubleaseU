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
                      <Link to="/post-listing">
                          <Button variant="primary" className="text-white nav btn-custom" id="post-button-1">Post Listing</Button>
                      </Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Link to="/">
                          <Button variant="primary" className="text-white nav btn-custom" id="post-button-2">View Listings</Button>
                      </Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Link to="/messages">
                          <Button variant="primary" className="text-white nav btn-custom" id="post-button-3">Messages</Button>
                      </Link>
                  </Nav.Item>
              </Nav>
          </Container>
      </Navbar>
  );
};
  
export default NavigationBar;
