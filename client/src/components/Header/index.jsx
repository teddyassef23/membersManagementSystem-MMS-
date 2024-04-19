import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 

import Baner from './../../assets/logoo.png'
import Auth from '../../utils/auth';
import '../css/header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control whether the menu is open or closed

  // Function to toggle between opening and closing the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle logout
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      {/* Navbar component */}
      <Navbar expand="md" className="navbar navbar-expand-md">
        <Container>
          {/* Navbar.Toggle to show the collapse menu on small screens */}
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          
          {/* Navbar.Collapse to control the collapsing behavior of the navbar */}
          <Navbar.Collapse id="navbar-nav" className={`justify-content-md-end w-100${isOpen ? ' show' : ''}`}>
            {/* Logo */}
            <img className='banner img-fluid' src={Baner} alt="" /> {/* Add the img-fluid class to make the image responsive */}
          
            {/* Navigation links */}
            <ul className="navbar-nav ml-auto">
              {/* Home link */}
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup" onClick={toggleMenu}>Sign Up</Link>
              </li>
              {Auth.loggedIn() && (
                <li className="nav-item">
                  <Link className="nav-link" to="/payment" onClick={toggleMenu}>Payment</Link>
                </li>
              )}
              {Auth.loggedIn() && ( // Verifica si el usuario ha iniciado sesión  
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
