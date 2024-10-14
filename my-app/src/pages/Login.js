// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/login.css';


const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); // Call the prop function to log in

    if (loggedInUser) {
      // Store logged in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // Navigate back to the place user came from, or to home if no from is set
      const from = location.state?.from || "/";
      navigate(from);
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Mina sidor</h2>
    <div className='login-container'>
      <form>
        
        <input className='input-login'
          type="email"
          name="email"
          placeholder="Email eller kundnummer"
          value={user.email}
          onChange={handleChange}
          required
        />
         <input className='input-login'
          type="password"
          name="password"
          placeholder="Lösenord"
          value={user.password}
          onChange={handleChange}
          required
        />
        
       
        <p onClick={() => navigate('/reset-password')} style={{ cursor: 'pointer', color: 'blue' }}>
          Glömt lösenord?
          
        </p>
        <p onClick={() => navigate('/register')}>Ny kund? Skapa konto här</p>

        <button type="button" onClick={handleLoginClick}>
          Logga in
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
