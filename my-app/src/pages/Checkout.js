import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // If user is not logged in, redirect to login
  if (!loggedInUser) {
    navigate('/login');
    return null; // Prevent rendering while redirecting
  }

  return (
    <div>
      <h1>Checkout</h1>
      <p>Kundens namn: {loggedInUser.firstname} {loggedInUser.lastname}</p>
      <p>Välkommen till checkout-sidan!</p>
      {/* Add additional checkout details or functionality here */}
    </div>
  );
}

export default Checkout;
