import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/register.css";

function Register({ onRegister }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    companyName: "",
    street: "",
    city: "",
    country: "",
    zipcode: "",
  });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check for required fields
    const {
      email,
      password,
      firstname,
      lastname,
      street,
      city,
      country,
      zipcode,
    } = user;
    if (
      !email ||
      !password ||
      !firstname ||
      !lastname ||
      !street ||
      !city ||
      !country ||
      !zipcode
    ) {
      alert("Vänligen fyll i alla obligatoriska fält."); // Alert message if fields are empty
      return; // Do not proceed with registration
    }

    // Save user data to localStorage
    localStorage.setItem("registeredUser", JSON.stringify(user));

    // Optionally call the onRegister function if passed as a prop
    if (onRegister) {
      onRegister(user);
    }

    // Redirect to login page after registration
    navigate("/login");
  };

  return (
    <div>
      <h2>Mina sidor</h2>
      <div className="login-container">
        <h3>Skapa konto</h3>
        <div className="input-grid">
          <div className="input-row">
            <div className="input-item">
              <h6 className="input-label">Förnamn*</h6>
              <input
                className="input-login"
                type="text"
                name="firstname"
                placeholder="Förnamn"
                value={user.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-item">
              <h6 className="input-label">Efternamn*</h6>
              <input
                className="input-login"
                type="text"
                name="lastname"
                placeholder="Efternamn"
                value={user.lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-item">
            <h6 className="input-label">Företagsnamn (valfritt)</h6>
            <input
              className="input-login"
              type="text"
              name="companyName"
              placeholder="Företagsnamn (valfritt)"
              value={user.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="input-item">
            <h6 className="input-label">Email*</h6>
            <input
              className="input-login"
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-item">
            <h6 className="input-label">Telefonnummer</h6>
            <input
              className="input-login"
              type="tel"
              name="phonenumber"
              placeholder="Telefonnummer"
              value={user.phonenumber}
              onChange={handleChange}
            />
          </div>

          <div className="input-item">
            <h6 className="input-label">Adress*</h6>
            <input
              className="input-login"
              type="text"
              name="street"
              placeholder="Adress"
              value={user.street}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-row">
            <div className="input-item">
              <h6 className="input-label">Stad*</h6>
              <input
                className="input-login"
                type="text"
                name="city"
                placeholder="Stad"
                value={user.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-item">
              <h6 className="input-label">Postnummer*</h6>
              <input
                className="input-login"
                type="text"
                name="zipcode"
                placeholder="Postnummer"
                value={user.zipcode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-item">
            <h6 className="input-label">Land*</h6>
            <input
              className="input-login"
              type="text"
              name="country"
              placeholder="Land"
              value={user.country}
              onChange={handleChange}
              required
            />
          </div>

          <h4>Välj lösenord</h4>

          <div className="input-item">
            <h6 className="input-label">Välj lösenord*</h6>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="Välj lösenord"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <p className="info-text">Lösenordet måste vara minst 6 tecken och innehålla minst en stor bokstav.</p>

          <div className="input-item">
            <h6 className="input-label">Bekräfta lösenord*</h6>
            <input
              className="input-login"
              type="password"
              name="confirmPassword"
              placeholder="Bekräfta lösenord"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="news"> 
    <input type="checkbox" id="news" name="news" class="news-input"/>
    <label for="news">Ja, Jag vill ta emot nyhetsbrev.</label>
  </div>

      </div>
          
        </div>

       
    </div>
  );
}

export default Register;
