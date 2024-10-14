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
    <div className="quote-summary">
      <h2>Offert</h2>
      <h3>Kundinformation:</h3>
      <p>Företagsnamn: {customer.companyName || 'Inget företag angivet'}</p>
      <p>Företagsadress: {customer.street || 'Ingen adress angiven'}</p>
      <p>Telefon: {customer.phone || 'Ingen telefon angiven'}</p>
      <p>E-post: {customer.email}</p>
      <p>Organisationsnummer: {customer.organizationNumber || 'Ingen organisationsnummer angiven'}</p>
      <p>Offertnummer: {quoteNumber}</p>
      <p>Datum: {formatDate(quoteDate)}</p>
      <p>Giltig till: {formatDate(new Date(quoteDate.setDate(quoteDate.getDate() + 7)))}</p> {/* Exempel på giltighet 7 dagar */}

      <h3>Produkter/Tjänster:</h3>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
           
            <th>Kvantitet</th>
            <th>Storlek</th> {/* Kolumn för storlek */}
            <th>Enhetspris</th>
            <th>Totalt</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.productId}>
              <td>{item.name}</td>
              
              <td>{item.totalQuantity}</td>
              <td>{item.size || 'Ingen storlek angiven'}</td> {/* Visa storlek */}
              <td>{item.pricePerItem} SEK</td>
              <td>{(item.pricePerItem * item.totalQuantity).toFixed(2)} SEK</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Totalpris: {totalCost} SEK</h3>
    </div>
  );
};

export default Quote;
