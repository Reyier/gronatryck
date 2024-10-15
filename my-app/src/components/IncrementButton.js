import React, { useState, useEffect } from "react";

function IncrementButton(props) {
  const [number, setNumber] = useState(props.quantity || 0); // Start with quantity from props

  useEffect(() => {
    setNumber(props.quantity); // Update state when props change
  }, [props.quantity]);

  function decreaseNumber() {
    const newNumber = number - 1;
    if (newNumber < 0) {
      change(0);
    } else {
      change(newNumber);
    }
  }
  
  function increaseNumber() {
    const newNumber = number + 1;
    change(newNumber);
  }
  
  function changeNumber(event) {
    const newNumber = Math.max(0, event.target.value); // Ensure not negative
    change(newNumber);
  }
  
  function change(number) {
    setNumber(number);
    props.handleChange(props.size, number); // Pass size and number to parent
  }
  
  return (
    <div className="increment-input">
    <label htmlFor={props.size}>{props.size}:</label>
    <div className="increment-number-input">
      <button
        onClick={decreaseNumber}
        type="button"
        className="increment-button"
      >
        -
      </button>
      <input
        className="input-number"
        onChange={changeNumber}
        type="number"
        id={props.size}
        min="0"
        value={number}
      />
      <button
        onClick={increaseNumber}
        type="button"
        className="increment-button"
      >
        +
      </button>
    </div>
  </div>
  );
}

export default IncrementButton;
