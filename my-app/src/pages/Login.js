import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) { // Accept onLogin as a prop
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Redirect based on user role
      if (parsedUser.role === 'Admin') {
        navigate('/admin');
      } else if (parsedUser.role === 'Customer') {
        navigate('/customer');
      }
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle login click
  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); // Call the prop function to log in

    if (loggedInUser) {
      // Navigate based on user role is handled in the handleLogin function
    }
  };

  return (
    <div>
      <form>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        onChange={handleChange}
      />
      <button onClick={handleLoginClick}>Login</button>
      </form>

    </div>
  );
}

export default Login;


















/*
// components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  // Kontrollera om användaren redan är inloggad
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (savedUser) {
      // Om det finns en användare i localStorage, navigera baserat på roll
      if (savedUser.role === 'Admin') {
        navigate('/admin');
      } else if (savedUser.role === 'Customer') {
        navigate('/customer');
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginClick = () => {
    const loggedInUser = onLogin(user); // Här kallas på onLogin som hanterar autentisering
    
    if (loggedInUser) {
      // Spara inloggad användare i localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      // Navigera till rätt sida baserat på användarroll
      if (loggedInUser.role === 'Admin') {
        navigate('/admin');
      } else if (loggedInUser.role === 'Customer') {
        navigate('/customer');
      } else {
        alert('Invalid role');
      }
    } else {
      alert('Login failed');
    }
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
*/
