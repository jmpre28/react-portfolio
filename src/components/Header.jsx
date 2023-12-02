import React from 'react';
import { Container, Header as SemanticHeader } from 'semantic-ui-react'; // Import Semantic UI Container and Header components
import Nav from './Nav';

export default function Header() {
  return (
    <Container>
      <SemanticHeader as="header" textAlign="center" className="header">
        <h1 id="name">Jake Preciado</h1>
        <Nav />
      </SemanticHeader>
    </Container>
  );
}