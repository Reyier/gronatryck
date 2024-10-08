// components/CustomerPage.js
import React from 'react';

function CustomerPage({ user, onLogout }) {
  return (
    <div>
      <h2>Välkommen {user.firstname}!</h2>
      
      <button onClick={onLogout}>Logga ut</button>
    </div>
  );
}

export default CustomerPage;