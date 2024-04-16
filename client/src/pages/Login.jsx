import React, { useState } from 'react';
import '../components/css/LoginSignup.css';
import icon_user from '../assets/person.png';
import icon_email from '../assets/email.png';
import icon_password from '../assets/password.png';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formState, setFormState] = useState({ name: '', email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      email: '',
      password: '',
    });
  };

  // Determine if all required fields are filled
  const isFormFilled = () => {
    return Object.values(formState).every(value => value !== '');
  };

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
              <input type="text" name="name" placeholder="Name" value={formState.name} onChange={handleChange} />
            </div>
          )}
          
          <div className="input">
            <img src={icon_email} alt="" />
            <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleChange} />
          </div>
          <div className="input">
            <img src={icon_password} alt="" />
            <input type="password" name="password" placeholder="Password" value={formState.password} onChange={handleChange} />
          </div>
          <div className="submit-container">
            {/* Show submit button only when all required fields are filled */}
            {isFormFilled() && (
              <button
                className="btn" 
                type="submit"
                onClick={handleFormSubmit} 
              >
                Submit
              </button>
            )}
            {/* Show sign up button only if currently on login page */}
            {action === "Login" && (
              <div className="submit" onClick={() => { setAction("Sign Up") }}>Sign up</div>
            )}
            {/* Show login button only if currently on sign up page */}
            {action === "Sign Up" && (
              <div className="submit" onClick={() => { setAction("Login") }}>Login</div>
            )}
          </div>
        </div>
      </div>
      <div className="footer-space"></div> {/* */}
    </div>
  );
}

export default LoginSignup;
