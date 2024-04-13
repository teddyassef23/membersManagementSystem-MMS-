import React, { useState } from 'react';
import '../components/styles/LoginSignup.css';
import icon_user from '../assets/person.png';
import icon_email from '../assets/email.png';
import icon_password from '../assets/password.png';
import Footer from '../components/Footer'; 

function LoginSignup() {
  const [action, setAction] = useState("Login");

  return (
    <div className="page-container">
      <div className="box">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? null : (
            <div className="input">
              <img src={icon_user} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          
          <div className="input">
            <img src={icon_email} alt="" />
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <img src={icon_password} alt="" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
          </div>
        </div>
      </div>
      <div className="footer-space"></div> {/* Espacio para separar del footer */}
      <Footer />
    </div>
  );
}

export default LoginSignup;
