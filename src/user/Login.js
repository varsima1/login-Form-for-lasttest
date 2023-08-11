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

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    /><br/>
                    <div style={{ position: 'relative' }}>
                        <input
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            type={showPassword ? 'text' : 'password'} // Conditionally set the input type
                            placeholder="********"
                            id="password"
                            name="password"
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

