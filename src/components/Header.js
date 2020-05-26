import React from 'react';
import Logo from '../images/logo.jpg';
// import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import GoogleAuth from './GoogleAuth';

const Header = () => (
  <header className="header">
    <div className="container">
      <h1><img src={Logo} alt="logo" /></h1>
      <div className="header__navigation">
        <LinkContainer to="/" activeClassName="is-active" exact={true}>
          <NavItem className="link">Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/booking" activeClassName="is-active">
          <NavItem className="link">Booking</NavItem>
        </LinkContainer>
        <LinkContainer to="/news" activeClassName="is-active">
          <NavItem className="link">News</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact" activeClassName="is-active">
          <NavItem className="link">Contact</NavItem>
        </LinkContainer>
        <GoogleAuth />
      </div>
    </div>
  </header>
);

export default Header;
