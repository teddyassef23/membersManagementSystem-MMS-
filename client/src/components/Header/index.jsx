import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 
// import logo from '../../assets/logo.png'; 
import Baner from './../../assets/Baner.jpg'
import Auth from '../../utils/auth';
import '../css/navbar.css'; 
import './header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  // Función para alternar entre abrir y cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <Navbar expand="md" className="navbar" style={{ backgroundColor: 'lightgrey', color: '#333' }}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            {/* <img src={logo} alt="Logo" height="65" className="d-inline-block align-top" /> */}
          </Navbar.Brand>
         
          <Navbar.Collapse id="navbar-nav" className={`justify-content-md-end${isOpen ? ' show' : ''}`}>
          <img className='baner' src={Baner} alt="" />
          
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
              </li>
            </ul> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link className="nav-link logout" to="/logout" onClick={handleLogout}>Logout</Link>
    </header>
  );
};

export default Header;
