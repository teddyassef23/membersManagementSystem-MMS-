import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 

import Baner from './../../assets/logoo.png'
import Auth from '../../utils/auth';
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
      <Navbar expand="md" className="navbar navbar-expand-md">
        <Container>
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />
          
          <Navbar.Collapse id="navbar-nav" className={`justify-content-md-end w-100${isOpen ? ' show' : ''}`}>
            <img className='banner img-fluid' src={Baner} alt="" /> {/* Agregamos la clase img-fluid para que la imagen sea responsiva */}
          
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" onClick={toggleMenu}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Signup" onClick={toggleMenu}>Sign Up</Link>
              </li>
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
