// components/AdminPage.js
import React from 'react';
import "../styles/admin.css";

function AdminPage({ onLogout }) {
  return (
    <div>
      <h2>Hej Admin!</h2>
      <p>Du är inloggad som administratör.</p>
      <button onClick={onLogout}>Logga ut</button>
    </div>
  );
}

export default AdminPage;