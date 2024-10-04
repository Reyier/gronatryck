import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h1>Kassa</h1>
      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} SEK
              <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
            </li>
          ))}
        </ul>
      )}

      <Link to="/">Gå till startsidan</Link>
      
      {/* Logik för att visa checkout eller login baserat på autentisering */}
      {/* {isLoggedIn ? (
        <Link to="/checkout">Gå till kassa</Link>
      ) : (
        <Link to="/login">Logga in</Link>
      )} */}
    </div>
  );
}

export default CartPage;
