// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); // Call the prop function to log in

    if (loggedInUser) {
      // Store logged in user in localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
      navigate("/"); // Redirect to home page
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <form>
        <h2>Logga in</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Lösenord"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={handleLoginClick}>
          Logga in
        </button>
        <p onClick={() => navigate('/register')}>Har du inget konto? Registrera dig här.</p>
        <p onClick={() => navigate('/reset-password')} style={{ cursor: 'pointer', color: 'blue' }}>
          Glömt lösenord?
        </p>
      </form>
    </div>
  );
};

export default Login;
