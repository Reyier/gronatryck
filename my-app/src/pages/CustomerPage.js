// components/CustomerPage.js
import React from 'react';

function CustomerPage({ user, onLogout }) {
  return (
    <div>
      <h2>Välkommen {user.firstname}!</h2>
      <p>Du är inloggad som kund.</p>
      <button onClick={onLogout}>Logga ut</button>
    </div>
  );
}

export default CustomerPage;