import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import './Navbar.css'; // Optional: Add custom styles here

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        {/* Add Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center ms-5">
          <img
            src={require("./image.png")} // Replace with your logo URL
            alt="PalmPay Logo"
            className="navbar-logo"
            style={{maxHeight:"50px", borderRadius:"90px"}}
          />
          <span className="ms-2">PalmPay</span> {/* App name next to the logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
