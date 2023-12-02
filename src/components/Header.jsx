import React from 'react';
import { Container, Header as SemanticHeader, Grid } from 'semantic-ui-react'; 
import './styles/Header.css'

export default function Header() {
  return (
    <Container fluid className="header-container">
      <SemanticHeader as="header" textAlign="center" className="page-header">
        <Grid columns={2} verticalAlign="middle">
          <Grid.Column textAlign="left">
            <h1 id="name">Jake Preciado</h1>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Nav />
          </Grid.Column>
        </Grid>
      </SemanticHeader>
    </Container>
  );
}