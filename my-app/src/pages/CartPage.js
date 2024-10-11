/*
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import ProgressTracker from '../components/ProgressTracker';

function CartPage() {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  // Get the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Calculate total price for the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.totalPrice || item.pricePerItem * item.totalQuantity), 0).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.totalQuantity, 0);
  };

  // Handle checkout click
  const handleCheckoutClick = () => {
    if (loggedInUser) {
      navigate('/checkout'); // Redirect to checkout if logged in
    } else {
      navigate('/login', { state: { from: { pathname: '/checkout' } } }); // Pass state indicating the user came from CartPage
    }
  };

  // Handle quantity change
  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) {
      removeFromCart(item.productId, item.selectedColor, item.size); // Remove item if quantity is 0
    } else {
      updateCartItem(item.productId, item.selectedColor, item.size, quantity); // Update quantity
    }
  };

  return (
    <div>
      <ProgressTracker />
      <h1>Varukorg ({calculateTotalQuantity()} varor)</h1>
      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.productId + item.selectedColor + item.size}>
                <p>{item.name} - Färg: {item.selectedColor} - Storlek: {item.size} - Pris/st: {item.pricePerItem} SEK</p>
                <div>
                  <button onClick={() => handleQuantityChange(item, item.totalQuantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.totalQuantity}
                    min="0"
                    onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 0)}
                  />
                  <button onClick={() => handleQuantityChange(item, item.totalQuantity + 1)}>+</button>
                </div>
                <p>Totalt: {item.totalPrice || (item.pricePerItem * item.totalQuantity).toFixed(2)} SEK</p>
                <button onClick={() => removeFromCart(item.productId, item.selectedColor, item.size)}>Ta bort</button>
              </li>
            ))}
          </ul>
          <h3>Totalt pris: {calculateTotalPrice()} SEK</h3>
        </>
      )}
      <Link to="/">Gå till startsidan</Link>
      {cartItems.length > 0 && (
        <button onClick={handleCheckoutClick}>Nästa steg</button>
      )}
    </div>
  );
}

export default CartPage;
*/

import { useCart } from "../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressTracker from '../components/ProgressTracker';

function CartPage() {
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();

  // State for handling comments and files
  const [comments, setComments] = useState({});
  const [files, setFiles] = useState({});

  // Load saved comments and files from localStorage
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || {};
    const savedFiles = JSON.parse(localStorage.getItem('files')) || {};
    setComments(savedComments);
    setFiles(savedFiles);
  }, []);

  // Save comments and files to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('files', JSON.stringify(files));
  }, [comments, files]);

  // Handle file upload
  const handleFileUpload = (e, itemId) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFiles({ ...files, [itemId]: reader.result });  // Save base64 string of the image
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle comment change
  const handleCommentChange = (e, itemId) => {
    setComments({ ...comments, [itemId]: e.target.value });
  };

  // Get the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Calculate total price for the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.totalPrice || item.pricePerItem * item.totalQuantity), 0).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.totalQuantity, 0);
  };

  // Handle checkout click
  const handleCheckoutClick = () => {
    if (loggedInUser) {
      navigate('/checkout'); // Redirect to checkout if logged in
    } else {
      navigate('/login', { state: { from: { pathname: '/checkout' } } }); // Pass state indicating the user came from CartPage
    }
  };

  // Handle quantity change
  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) {
      removeFromCart(item.productId, item.selectedColor, item.size); // Remove item if quantity is 0
    } else {
      updateCartItem(item.productId, item.selectedColor, item.size, quantity); // Update quantity
    }
  };

  return (
    <div>
      <ProgressTracker />
      <h1>Varukorg ({calculateTotalQuantity()} varor)</h1>
      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.productId + item.selectedColor + item.size}>
                <p>{item.name} - Färg: {item.selectedColor} - Storlek: {item.size} - Pris/st: {item.pricePerItem} SEK</p>
                <div>
                  <button onClick={() => handleQuantityChange(item, item.totalQuantity - 1)}>-</button>
                  <input
                    type="number"
                    value={item.totalQuantity}
                    min="0"
                    onChange={(e) => handleQuantityChange(item, parseInt(e.target.value) || 0)}
                  />
                  <button onClick={() => handleQuantityChange(item, item.totalQuantity + 1)}>+</button>
                </div>
                <p>Totalt: {item.totalPrice || (item.pricePerItem * item.totalQuantity).toFixed(2)} SEK</p>
                <button onClick={() => removeFromCart(item.productId, item.selectedColor, item.size)}>Ta bort</button>

                {/* File upload section */}
                <label>Bifoga fil (PDF, bild):</label>
                <input type="file" accept="image/*,.pdf" onChange={(e) => handleFileUpload(e, item.productId)} />
                
                {/* Show the uploaded image if available */}
                {files[item.productId] && (
                  <div>
                    <p>Bifogad bild:</p>
                    <img src={files[item.productId]} alt="Uploaded" style={{ width: '150px', height: 'auto' }} />
                  </div>
                )}

                {/* Comment section */}
                <label>Kommentar:</label>
                <textarea
                  value={comments[item.productId] || ''}
                  onChange={(e) => handleCommentChange(e, item.productId)}
                />
              </li>
            ))}
          </ul>
          <h3>Totalt pris: {calculateTotalPrice()} SEK</h3>
        </>
      )}
      <Link to="/">Gå till startsidan</Link>
      {cartItems.length > 0 && (
        <button onClick={handleCheckoutClick}>Nästa steg</button>
      )}
    </div>
  );
}

export default CartPage;

