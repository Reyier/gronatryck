// components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ onRegister }) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    companyName: '',
    street: '',
    city: '',
    country: '',
    zipcode: ''
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h2>Registrera</h2>
      <form>
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required /><br />
        <input type="password" name="password" placeholder="Lösenord" value={user.password} onChange={handleChange} required /><br />
        <input type="text" name="firstname" placeholder="Förnamn" value={user.firstname} onChange={handleChange} required /><br />
        <input type="text" name="lastname" placeholder="Efternamn" value={user.lastname} onChange={handleChange} required /><br />
        <input type="text" name="companyName" placeholder="Företagsnamn (valfritt)" value={user.companyName} onChange={handleChange} /><br />
        <input type="text" name="street" placeholder="Gata" value={user.street} onChange={handleChange} required /><br />
        <input type="text" name="city" placeholder="Stad" value={user.city} onChange={handleChange} required /><br />
        <input type="text" name="country" placeholder="Land" value={user.country} onChange={handleChange} required /><br />
        <input type="text" name="zipcode" placeholder="Postnummer" value={user.zipcode} onChange={handleChange} required /><br />
        <button type="button" onClick={() => onRegister(user)}>Registrera</button>
      </form>
      <p onClick={() => navigate('/login')}>Har du redan ett konto? Logga in här.</p>
    </div>
  );
}

export default Register;


