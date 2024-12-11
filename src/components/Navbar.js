import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
  <div className="container justify-content-center">
    <Navbar bg="white" variant="white" expand="lg">
      <Navbar.Brand as={Link} to="/">Peak Rentals</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/equipment">Equipment</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  );
};

export default NavBar;
