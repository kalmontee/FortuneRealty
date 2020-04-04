import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { HomeContainer } from '../components/Grid/Grid';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <NavBar />
        <h1>Hello World</h1>
      </HomeContainer>
    )
  }
}

export default Home;