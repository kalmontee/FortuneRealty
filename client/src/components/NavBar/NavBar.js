import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './navbar.css'

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to="/" className={window.location.pathname === "/" ? "navbarTabsLink" : "LinkClick"}>
          Fortune Realty
        </Link>

        <Link to="/about-us" className={window.location.pathname === "/about-us" ? "navbarTabsLink" : "LinkClick"}>
          About Us
        </Link>

        <Link to="/buy" className={window.location.pathname === "/buy" ? "navbarTabsLink" : "LinkClick"}>
          Buy
        </Link>

        <Link to="/sell" className={window.location.pathname === "/sell" ? "navbarTabsLink" : "LinkClick"}>
          Sell
        </Link>

        <Link to="/testimonials" className={window.location.pathname === "/testimonials" ? "navbarTabsLink" : "LinkClick"}>
          Testimonials
        </Link>

        <Link to="/contact" className={window.location.pathname === "/contact" ? "navbarTabsLink" : "LinkClick"}>
          Contact
        </Link>
      </nav>
    )
  }
}

export default withRouter(NavBar);