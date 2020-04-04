import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <nav className={window.location.pathname === "/" ? "home-navbar" : "navbar"}>
      <Link to="/" className={window.location.pathname === "/" ? "active navbar-title" : "navbarLink navbar-title"}>
        Fortune Realty
      </Link>

      <Link to="/about-us" className={window.location.pathname === "/about-us" ? "active" : "navbarLink"}>
        About Us
      </Link>

      <Link to="/buy" className={window.location.pathname === "/buy" ? "active" : "navbarLink"}>
        Buy
      </Link>

      <Link to="/sell" className={window.location.pathname === "/sell" ? "active" : "navbarLink"}>
        Sell
      </Link>

      <Link to="/testimonials" className={window.location.pathname === "/testimonials" ? "active" : "navbarLink"}>
        Testimonials
      </Link>

      <Link to="/contact" className={window.location.pathname === "/contact" ? "active" : "navbarLink"}>
        Contact
      </Link>
    </nav>
  )
}

export default withRouter(NavBar);