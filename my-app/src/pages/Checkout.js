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


