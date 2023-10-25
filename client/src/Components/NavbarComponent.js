import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#main">Pin The Mood</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#recommendations-list">See Recommendations</Nav.Link>
          <Nav.Link href="#new-recommendation">Add New Recommendation</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
