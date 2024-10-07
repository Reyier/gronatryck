import { useCart } from "../context/CartContext";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Get the logged-in user from localStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Calculate total price for the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.totalPrice || item.pricePerItem * item.totalQuantity), 0).toFixed(2);
  };

  // Redirect to login if user is not logged in
  useEffect(() => {
    if (!loggedInUser && cartItems.length > 0) {
      alert('Du måste vara inloggad för att gå till kassan.');
      navigate('/login');
    }
  }, [loggedInUser, navigate, cartItems]);

  // Handle checkout click
  const handleCheckoutClick = () => {
    if (loggedInUser) {
      navigate('/checkout'); // Redirect to checkout if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  return (
    <div>
      <h1>Varukorg</h1>
      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.productId + item.selectedColor + item.size}> 
                <p>{item.name} - Färg: {item.selectedColor} - Storlek: {item.size} - Antal: {item.totalQuantity} - Pris/st: {item.pricePerItem} SEK</p>
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
        <button onClick={handleCheckoutClick}>Gå till kassa</button>
      )}
    </div>
  );
}

export default CartPage;
