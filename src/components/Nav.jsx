import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles/Nav.css'

export default function Nav() {
  return (
    <Container fluid className='nav'>
      <Menu secondary size='large' style={{ justifyContent: 'center' }}>
        <Menu.Item as={Link} to="/" name="aboutMe">
          About Me
        </Menu.Item>
        <Menu.Item as={Link} to="/portfolio" name="portfolio">
          Portfolio
        </Menu.Item>
        <Menu.Item as={Link} to="/resume" name="resume">
          Resume
        </Menu.Item>
        <Menu.Item as={Link} to="/contact" name="contact">
          Contact Me
        </Menu.Item>
      </Menu>
    </Container>
  );
}