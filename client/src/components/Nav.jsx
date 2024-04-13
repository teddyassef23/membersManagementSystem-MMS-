import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 
import logo from '../assets/logo.png'; 
import '../components/styles/navbar.css'; 

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg" className={`justify-content-center ${scrolled ? 'navbar-scrolled' : ''}`} style={{ color: '#333' }}>
      <Container fluid> {/* Use fluid to make the container full width */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="navbar-nav" className={`justify-content-center ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ml-auto"> {/* Added ml-auto to push menu items to the right */}
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
