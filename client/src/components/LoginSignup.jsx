import React from "react";
import './css/LoginSingup.css';

import icon_user from '../components/assets/person.png'
import icon_email from '../components/assets/email.png'
import icon_password from '../components/assets/password.png'

function LoginSingup() {
    return (
      <div className="container">
        <div className="header">
            <div className="sing up"></div>
            <div className="text"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={icon_user} alt="" />
                    <input type="text" />
                </div>
                <div className="input">
                    <img src={icon_email} alt="" />
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={icon_password} alt="" />
                    <input type="password" />
                </div>

            </div>

        </div>
       
      </div>
    );
  }
  
  export default LoginSingup;
  