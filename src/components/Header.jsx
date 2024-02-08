import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './styles/Header.css'

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="nav">
        <h2 className='name col-6'>Jake Preciado | Full Stack Developer</h2>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="nav-links-container col">
            <Nav.Link as={Link} to="/" className="nav-link" name="aboutMe">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="nav-link" name="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="nav-link" name="resume">
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" name="contact">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}