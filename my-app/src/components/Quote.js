// components/Quote.js
import React from 'react';
import '../styles/checkout.css'; // Import CSS

const Quote = ({ customer, cartItems, totalCost }) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const quoteNumber = '001'; // Här kan du generera ett unikt nummer
  const quoteDate = new Date();

  return (
    <div className="quote-summary collapse-container ">
      <h1 className='heading-2'>Offert</h1>
      <h3 className='subheading-3'>Kundinformation</h3>
      <div className="main-body">
      <p>Företagsnamn: {customer.companyName || 'Inget företag angivet'}</p>
      <p>Företagsadress: {customer.street || 'Ingen adress angiven'}</p>
      <p>Telefon: {customer.phone || 'Ingen telefon angiven'}</p>
      <p>E-post: {customer.email}</p>
      <p>Organisationsnummer: {customer.organizationNumber || 'Ingen organisationsnummer angiven'}</p>
      <p>Offertnummer: {quoteNumber}</p>
      <p>Datum: {formatDate(quoteDate)}</p>
      <p>Giltig till: {formatDate(new Date(quoteDate.setDate(quoteDate.getDate() + 7)))}</p> {/* Exempel på giltighet 7 dagar */}

      </div>

      <div className='quote-container'>
      <h3 className='subheading-3'> Produkter/Tjänster:</h3>

      
      {cartItems.map((item) => (
    <div key={item.productId} className="item-row">
      <div className="item-name main-body">
        <strong>{item.name}</strong>
      </div>

      <div className="item-details">
        <p className="item-quantity main-body">
          <span className='detail-label'>Antal:</span> {item.totalQuantity} St
        </p>
        <p className="item-size main-body">
          <span className='detail-label'>Storlek:</span> {item.size || 'Ingen storlek angiven'}
        </p>
        <p className="item-color main-body">
          <span className='detail-label'>Färg:</span> {item.selectedColor}
        </p>
        <p className="item-price main-body">
          <span className='detail-label'>Pris:</span> {item.pricePerItem} SEK/ST
        </p>
      </div>
    </div>
  ))}
          
          <div className="price-container">
            <div className='price-heading'>
        <h3>Totalpris: {totalCost} SEK</h3>
        </div>
      </div>
      
      
      </div>
    </div>
  );
};

export default Quote;
