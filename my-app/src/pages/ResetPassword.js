// components/ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword({ onReset }) {
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div>
      <h2>Återställ lösenord</h2>
      <input 
        type="email" 
        placeholder="Ange din email" 
        value={resetEmail} 
        onChange={(e) => setResetEmail(e.target.value)} 
      /><br />
      <input 
        type="password" 
        placeholder="Ange nytt lösenord" 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
      /><br />
      <button onClick={() => onReset(resetEmail, newPassword)}>Återställ lösenord</button>
      <p onClick={() => navigate('/login')}>Tillbaka till inloggning</p>
    </div>
  );
}

export default ResetPassword;

