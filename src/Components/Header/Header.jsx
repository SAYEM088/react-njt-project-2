import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../Activelink/Activelink';
import { Link } from 'react-router-dom';
import './Header.css';
import { Image } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <h2 className='brand' href="#home"><Image style={{ width: '3rem', height: '3rem' }} src='letter-n.png' roundedCircle></Image> NjT</h2>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>
              <ActiveLink to='/training'>Experience</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;