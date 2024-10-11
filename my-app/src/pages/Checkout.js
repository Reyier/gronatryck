/*
// components/Checkout.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Quote from '../components/Quote';
import '../styles/checkout.css'; // Import CSS
import ProgressTracker from '../components/ProgressTracker';
import { useNavigate} from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const { cartItems } = useCart();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [customerInfo, setCustomerInfo] = useState(loggedInUser || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.pricePerItem) * item.totalQuantity, 0).toFixed(2);
  };

  const totalCost = calculateTotalPrice();

  return (
    <div className="checkout-container">
      <ProgressTracker/>
      <h1>Checkout</h1>
      {loggedInUser ? (
        <>
          <h2>Kundinformation</h2>
          <form><label>
              För & Efternamn
              <input type="text" name="personName" value={customerInfo.personName} onChange={handleChange} />
            </label><br />
            <label>
              Företagsnamn:
              <input type="text" name="companyName" value={customerInfo.companyName} onChange={handleChange} />
            </label><br />
            <label>
              Företagsadress:
              <input type="text" name="street" value={customerInfo.street} onChange={handleChange} />
            </label><br />
            <label>
              Telefon:
              <input type="text" name="phone" value={customerInfo.phone || ''} onChange={handleChange} />
            </label><br />
            <label>
              E-post:
              <input type="email" name="email" value={customerInfo.email} onChange={handleChange} required />
            </label><br />
            <label>
              Organisationsnummer:
              <input type="text" name="organizationNumber" value={customerInfo.organizationNumber || ''} onChange={handleChange} />
            </label>
          </form>

          <Quote customer={customerInfo} cartItems={cartItems} totalCost={totalCost} />
          <p onClick={() => navigate('/cart')}>Gå tillbaka till varukorg.</p>
          <button onClick={() => alert('Köpet har genomförts!')}>Skicka offert</button>
        </>
      ) : (
        <p>Du måste vara inloggad för att se offerten.</p>
      )}
    </div>
  );
}

export default Checkout;
*/

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Quote from '../components/Quote';
import '../styles/checkout.css'; // Import CSS
import ProgressTracker from '../components/ProgressTracker';
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const [customerInfo, setCustomerInfo] = useState(loggedInUser || {});
  
  // State for comments and files
  const [comments, setComments] = useState({});
  const [files, setFiles] = useState({});

  // Load comments and files from localStorage when component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    const savedFiles = JSON.parse(localStorage.getItem('files')) || {};
    setComments(savedComments);
    setFiles(savedFiles);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.pricePerItem) * item.totalQuantity, 0).toFixed(2);
  };

  const totalCost = calculateTotalPrice();

  return (
    <div className="checkout-container">
      <ProgressTracker/>
      <h1>Checkout</h1>
      {loggedInUser ? (
        <>
          <h2>Kundinformation</h2>
          <form>
            <label>
              För & Efternamn
              <input type="text" name="personName" value={customerInfo.personName} onChange={handleChange} />
            </label><br />
            <label>
              Företagsnamn:
              <input type="text" name="companyName" value={customerInfo.companyName} onChange={handleChange} />
            </label><br />
            <label>
              Företagsadress:
              <input type="text" name="street" value={customerInfo.street} onChange={handleChange} />
            </label><br />
            <label>
              Telefon:
              <input type="text" name="phone" value={customerInfo.phone || ''} onChange={handleChange} />
            </label><br />
            <label>
              E-post:
              <input type="email" name="email" value={customerInfo.email} onChange={handleChange} required />
            </label><br />
            <label>
              Organisationsnummer:
              <input type="text" name="organizationNumber" value={customerInfo.organizationNumber || ''} onChange={handleChange} />
            </label>
          </form>

          <h2>Dina varor</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.productId + item.selectedColor + item.size}>
                <p>{item.name} - Färg: {item.selectedColor} - Storlek: {item.size} - Pris/st: {item.pricePerItem} SEK</p>
                <p>Antal: {item.totalQuantity}</p>
                <p>Totalt: {(item.pricePerItem * item.totalQuantity).toFixed(2)} SEK</p>

                {/* Display the attached file if it exists */}
                {files[item.productId] && (
                  <p>Bifogad fil: <a href={files[item.productId]} target="_blank" rel="noopener noreferrer">Visa fil</a></p>
                )}

                {/* Display the comment if it exists */}
                {comments[item.productId] && (
                  <p>Kommentar: {comments[item.productId]}</p>
                )}
              </li>
            ))}
          </ul>

          <h3>Totalt pris: {totalCost} SEK</h3>

          <Quote customer={customerInfo} cartItems={cartItems} totalCost={totalCost} />
          <p onClick={() => navigate('/cart')}>Gå tillbaka till varukorg.</p>
          <button onClick={() => alert('Köpet har genomförts!')}>Skicka offert</button>
        </>
      ) : (
        <p>Du måste vara inloggad för att se offerten.</p>
      )}
    </div>
  );
}

export default Checkout;
