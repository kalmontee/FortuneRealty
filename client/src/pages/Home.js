import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default Home;