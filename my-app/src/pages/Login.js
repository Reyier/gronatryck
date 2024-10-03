// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    onLogin(user);
    // Navigate to the customer page after login
    navigate('/customer'); // Redirect to /customer after login
  };

  return (
    <div>
      <h2>Logga in</h2>
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={user.email} 
        onChange={handleChange} 
      /><br />
      <input 
        type="password" 
        name="password" 
        placeholder="Lösenord" 
        value={user.password} 
        onChange={handleChange} 
      /><br />
      <button onClick={handleLoginClick}>Logga in</button>
      <p onClick={() => navigate('/register')}>Har du inget konto? Registrera här.</p>
      <p onClick={() => navigate('/reset-password')}>Glömt lösenord? Återställ här.</p>
    </div>
  );
}

export default Login;


