import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../assets/css/Header.css';

export default function Header() {
  return (
    <>
      {/* <Navbar expand="lg" className="nav">
        <h3 className=' col-6'>Jake Preciado</h3>
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
      </Navbar> */}
      <header className='sticky-top'>
      <Navbar expand="lg" className="navbar navbar-dark navbar-expand-lg" aria-label="Main">
        <div className="container">
          <Link to="/" className="navbar-brand d-inline-flex text-uppercase">Jake Preciado</Link>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="navbar-nav ms-auto">             
                <Nav.Link as={Link} to="/" className="nav-link">ABOUT ME</Nav.Link>            
              <li>
                <Nav.Link as={Link} to="/portfolio" className="nav-link">PORTFOLIO</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/resume" className="nav-link">RESUME</Nav.Link>
              </li>
              <li>
                <Nav.Link as={Link} to="/contact" className="nav-link">CONTACT ME</Nav.Link>
              </li>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      </header>
    </>
  );
}