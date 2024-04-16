import React from 'react';
import Particle from '../components/Particle';
import backgroundImage from '../assets/member.png'; 
import '../components/css/home.css'; 
import Footer from '../components/Footer/index'; 


function HomePage() {
  return (
    <div className="background-container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative', 
      overflow: 'hidden', 
    }}>
      <Particle />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-4 animated-text">Welcome👋</h1>
          <p className="animated-paragraph">TO DEBRE MIHRET ST. MICHAEL ETHIOPIAN ORTHODOX </p>
          <p className="animated-paragraph">TEWAHEDO CHURCH OF ILLINOIS</p>
        </div>
      </div>
      <div className="footer-space"></div> {/* Espacio para separar del footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

