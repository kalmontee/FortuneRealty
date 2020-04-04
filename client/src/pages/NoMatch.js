import React from 'react';
import { Container } from '../components/Grid/Grid';
import NavBar from '../components/NavBar/NavBar';

function NoMatch() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <Container>
      <NavBar />
      <h1 style={divStyle}>404 Page Not Found</h1>
      <h1 style={divStyle}>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </Container>
  );
}

export default NoMatch;