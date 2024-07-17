import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EnglishLearningNavbar() {
  return (
    <Navbar bg="light" expand="lg" style={{ backgroundColor: '#f8f9fa', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Container>
      <Navbar.Brand as={Link} to="/">English Learning Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {/* <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="words">Popular Words</Nav.Link> */}
                        <Nav.Link as={Link} to="/">Levels</Nav.Link>

            {/* <Nav.Link href="resources">Resources</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EnglishLearningNavbar;
