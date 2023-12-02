import React from 'react';
import { Menu } from 'semantic-ui-react'; // Import Semantic UI Menu component
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <Menu secondary className='nav'>
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
        Contact
      </Menu.Item>
    </Menu>
  );
}