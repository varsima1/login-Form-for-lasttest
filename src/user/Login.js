import React, { useState } from "react";
import './Login.css'
import './LoginResponsive.css'
import './passwordShow.css'
import Register from "./Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if fields are filled
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (pass === '') {
      setPassError(true);
    } else {
      setPassError(false);
    }

    // Perform actual form submission or other actions
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="Lcontainer">
      <div className="Lleft">
        <h1 className="h1L">Scroll</h1>
        <p className="pL">Connect with friends and the world<br/> around you on Scroll.</p>
      </div>
      <div className="Lright">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className={emailError ? 'error-input' : ''}
          /><br/>
          {emailError && <p className="error-text">Please fill in your email.</p>}
          <div style={{ position: 'relative' }}>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id="password"
              name="password"
              className={passError ? 'error-input' : ''}
            />
            <span
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
              />
            </span>
          </div>
          {passError && <p className="error-text">Please fill in your password.</p>}
          <br/>
          <button type="submit" className="Lbutton">Log In</button><br/>
          <button type="submit" className="Lforgot">Forgot Password?</button><br/>
          <p className="Lline"></p>
          <Register/>
        </form>
      </div>
    </div>
  )
}
