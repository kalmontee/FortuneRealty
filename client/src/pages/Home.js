import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import { HomeContainer } from '../components/Grid/Grid';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <NavBar />
        {/* <img src={img} alt="home buyer" /> */}
        {/* <h1>Hello World</h1> */}
      </HomeContainer>
    )
  }
}

export default Home;