import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ActiveLink from '../Activelink/Activelink';
import { Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
const Header = () => {
    return (
        <Navbar expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand className='brand' href="#home">NjT</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
             <ActiveLink to='/'>Home</ActiveLink>

              <NavDropdown className='dropdown ' title="About Me" id="basic-nav-dropdown">
                <ActiveLink to='/info'>Info</ActiveLink>
                <ActiveLink to='/training'>Training</ActiveLink>
                
              </NavDropdown>
              <ActiveLink to='/contact'>Contact</ActiveLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;