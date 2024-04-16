import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 
import logo from '../../assets/logo.png'; 
import Auth from '../../utils/auth';
import '../css/navbar.css'; 

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
            <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="navbar-nav" className={`justify-content-md-end${isOpen ? ' show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
