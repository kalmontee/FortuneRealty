import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
    </Router>
  );
}

export default App;