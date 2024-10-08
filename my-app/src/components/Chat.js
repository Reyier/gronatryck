import React, { useState } from 'react';
import '../styles/chat.css'; // Se till att CSS-filen finns

const Chat = () => {
  const [isVisible, setIsVisible] = useState(false); // Håll koll på om chatten är synlig eller inte

  const toggleChat = () => {
    setIsVisible(!isVisible); // Byt till synlig eller dold när knappen trycks
  };

  return (
    <div className="chat-container">
      {/* Knappen för att öppna/stänga chatten */}
      {!isVisible && (
        <button onClick={toggleChat} className="chat-toggle-button">
          Chatt
        </button>
      )}

      {isVisible && (
        <div className="chat-window">
          {/* Header för chatten */}
          <div className="chat-header">
           <div> <h4>Kundtjänst</h4>
            <div className="online-status"></div>
            </div>
            {/* Ny knapp för att stänga chatten */}
            <button className="close-chat-btn" onClick={toggleChat}>
              X
            </button>
          </div>

          {/* Meddelanden */}
          <div className="chat-body">
            <div className="message">Hej! Hur kan vi hjälpa dig?</div>
            {/* Fler meddelanden kan läggas till här */}
          </div>

          {/* Footer för att skriva meddelanden */}
          <div className="chat-footer">
            <input type="text" placeholder="Skriv ditt meddalande här.." />
            <button>Skicka</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;






/*

<div className="chat-container">
<button onClick={toggleChat} className="chat-toggle-button">
  {isVisible ? 'Close Chat' : 'Open Chat'}
</button>
{visible && (
  <div className="chat-window">
    <div className="chat-header">
      <h4>Gröna Trycks Kundtjänst</h4>
      <span className="online-status">Online</span>
    </div>
    <div className="chat-body">
      <div className="message">
        <p>Hej! Kan vi hjälpa dig med något?</p>
      </div>
    </div>
    <div className="chat-footer">
      <input type="text" placeholder="Skriv ett meddelande här..." />
      <button>Send</button>
    </div>
  </div>
)}
</div>
);*/