// components/ConfirmationPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails; 

  if (!orderDetails) {
    return <div>Ingen beställning information tillgänglig.</div>;
  }

  return (
    <div>
      <h1>Tack för ditt köp!</h1>
      <h2>Ordernummer: {orderDetails.orderId}</h2>
      <h3>Sammanfattning av din beställning:</h3>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.name} - Antal: {item.totalQuantity} - Pris: {item.pricePerItem} SEK
          </li>
        ))}
      </ul>
      <h4>Totalt belopp: {orderDetails.totalCost} SEK</h4>
      <h4>Kundinformation:</h4>
      <p>Namn: {orderDetails.customerInfo.personName}</p>
      <p>Företagsnamn: {orderDetails.customerInfo.companyName}</p>
      <p>Telefon: {orderDetails.customerInfo.phone}</p>
      <p>E-post: {orderDetails.customerInfo.email}</p>
      <button onClick={() => window.location.href = '/'}>Gå tillbaka till startsidan</button>
    </div>
  );
};

export default ConfirmationPage;
