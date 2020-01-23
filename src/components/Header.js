import React from 'react';
import Logo from '../images/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1><img src={Logo} alt="logo" /></h1>
      <div className="header__navigation">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/booking" activeClassName="is-active">Booking</NavLink>
        <NavLink to="/servicelist" activeClassName="is-active">Service List</NavLink>
        <NavLink to="/news" activeClassName="is-active">News</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <button className="btn btn-secondary" type="login">Login</button>
      </div>
    </div>
  </header>
);

export default Header;
