// components/Login.js




// Göra sidan för loggain/ bli medlem
// if epost finns i databas, forstätt logga in
// else epost finns inte. knapp vill du registera dig
// likt denna sida https://nelly.com/se/login/?redirectTo=/se/campaign/must-have-knits/






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
    const loggedInUser = onLogin(user); // Få det inloggade användarobjektet från onLogin
    
    if (loggedInUser) {
      // Kontrollera användarens roll och navigera till rätt sida
      if (loggedInUser.role === 'Admin') {
        navigate('/admin'); // Navigera till adminsidan
      } else if (loggedInUser.role === 'Customer') {
        navigate('/customer'); // Navigera till kundsidan
      } else {
        alert('Invalid role'); // Hantera okända roller om det behövs
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
