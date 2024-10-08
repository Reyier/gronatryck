import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/progresstracker.css';

const ProgressTracker = () => {
  const location = useLocation(); // Hämta den aktuella vägen
  const steps = ['Varukorg', 'Logga in', 'Dina uppgifter', 'Bekräftelse'];

  const currentStep = () => {
    switch (location.pathname) {
      case '/cart':
        return 0; // Steg 0 - Varukorg
      case '/login':
        return 1; // Steg 1 - Logga in
      case '/checkout':
        return 2; // Steg 2 - Dina uppgifter
      case '/confirmation':
        return 3; // Steg 3 - Bekräftelse
      default:
        return 0; // Om inget matchar, returnera steg 0
    }
  };

  return (
    <div className="progress-tracker">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`step ${index < currentStep() ? 'completed' : ''} ${index === currentStep() ? 'active' : ''}`}
        >
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
