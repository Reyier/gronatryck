import { useCart } from "../context/CartContext";

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
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartPage;
