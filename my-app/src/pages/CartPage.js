import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ProgressTracker from "../components/ProgressTracker";
import "../styles/CartPage.css";
import { darkPrintPrice } from "../data/printPrice";

function CartPage() {
  const [printIndex, setPrintIndex] = useState("");
  const [printType, setPrintType] = useState("dark"); // State to handle the selected print type
  const [selectedPrintType, setSelectedPrintType] = useState("");

  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const [globalComment, setGlobalComment] = useState("");
  const [globalFile, setGlobalFile] = useState(null);
  const [applyToAll, setApplyToAll] = useState(true);
  const [productDetails, setProductDetails] = useState({});

  // State for handling print type and price
  const [selectedPrintTypes, setSelectedPrintTypes] = useState({});
  const [printIndexes, setPrintIndexes] = useState({});

  // Handle file and comment input for each product or globally
  const handleGlobalFileUpload = (e) => setGlobalFile(e.target.files[0]);
  const handleGlobalCommentChange = (e) => setGlobalComment(e.target.value);

  const handleFileUploadForProduct = (e, productId) => {
    setProductDetails({
      ...productDetails,
      [productId]: {
        ...productDetails[productId],
        file: e.target.files[0],
      },
    });
  };

  const handleCommentChangeForProduct = (e, productId) => {
    setProductDetails({
      ...productDetails,
      [productId]: {
        ...productDetails[productId],
        comment: e.target.value,
      },
    });
  };

  // Handle quantity change for products in the cart
  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) {
      removeFromCart(item.productId, item.selectedColor, item.size);
    } else {
      updateCartItem(item.productId, item.selectedColor, item.size, quantity);
    }
  };












  

  // Calculate total price based on cart items, including printing if applicable
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const printIndex = printIndexes[item.productId] || 0;
        const printPricePerItem = selectedPrintTypes[item.productId]
          ? getPriceByTotalQuantity(item.totalQuantity, printIndex)
          : 0;
        const totalPrintPrice = printPricePerItem * item.totalQuantity;

        return (
          total +
          (parseFloat(
            item.totalPrice || item.pricePerItem * item.totalQuantity
          ) +
            totalPrintPrice)
        );
      }, 0)
      .toFixed(2);
  };


  

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.totalQuantity, 0);
  };

  // Function to get price based on total quantity and print index
  const getPriceByTotalQuantity = (totalQuantity) => {
    if (totalQuantity < 50) {
      return darkPrintPrice.amount[25][printIndex];
    } else if (totalQuantity < 100) {
      return darkPrintPrice.amount[50][printIndex];
    } else if (totalQuantity < 250) {
      return darkPrintPrice.amount[100][printIndex];
    } else if (totalQuantity < 500) {
      return darkPrintPrice.amount[250][printIndex];
    } else {
      return darkPrintPrice.amount[500][printIndex];
    }
  };
  console.log(darkPrintPrice.amount[25]);

  const totalPrintPrice =
    getPriceByTotalQuantity(calculateTotalQuantity()) *
    calculateTotalQuantity();

  const handlePrintTypeChange = (e, productId) => {
    const printIndex = e.target.value.slice(0, 1) - 1;
    setPrintIndexes({
      ...printIndexes,
      [productId]: printIndex,
    });
    setSelectedPrintTypes({
      ...selectedPrintTypes,
      [productId]: e.target.value,
    });
  };

  const handleCheckoutClick = () => {
    if (loggedInUser) {
      const orderData = {
        globalFile: globalFile,
        globalComment: globalComment,
        appliesTo: applyToAll ? "all" : "specific",
        productDetails: !applyToAll ? productDetails : {},
      };

      console.log(orderData); // Save or send this to backend later

      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: { pathname: "/checkout" } } });
    }
  };

  return (
    <div class="cartpage">
      <ProgressTracker />
      <h1>Varukorg ({calculateTotalQuantity()} varor)</h1>

      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <div className="cart-page-container">
          <div className="cart-content">
            <ul>
              {cartItems.map((item) => (
                <li
                  class="cart-list"
                  key={item.productId + item.selectedColor + item.size}
                >
                  <p>
                    {item.name} - Färg: {item.selectedColor} - Storlek:{" "}
                    {item.size} - Pris/st: {item.pricePerItem} SEK
                  </p>

                  {/* Quantity control */}
                  <div>
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.totalQuantity - 1)
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.totalQuantity}
                      min="0"
                      onChange={(e) =>
                        handleQuantityChange(
                          item,
                          parseInt(e.target.value) || 0
                        )
                      }
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item, item.totalQuantity + 1)
                      }
                    >
                      +
                    </button>

                    <button
                      class="remove-btn"
                      onClick={() =>
                        removeFromCart(
                          item.productId,
                          item.selectedColor,
                          item.size
                        )
                      }
                    >
                      Ta bort
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <h3>Totalt pris: {calculateTotalPrice()} SEK</h3>
            {cartItems.length > 0 && (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.productId + item.selectedColor + item.size}>
                    {/* Existing item details */}
                    Färgtryck: {selectedPrintType || "Inget valt"}{" "}
                    {getPriceByTotalQuantity(item.totalQuantity)} SEK/ST Totalt:{" "}
                    {totalPrintPrice.toFixed(2)}{" "}SEK {""}Totalt antal tryck: {calculateTotalQuantity()}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Sidebar for Print Options */}
          <div className="print-container">
            <h3>Här kan du lägga till bifogad fil för tryck</h3>
            <label class="print-label">
              Tryck:
              <select
                onChange={(e) => {
                  const hej = e.target.value.slice(0, 1) - 1;
                  setPrintIndex(hej);
                  setSelectedPrintType(e.target.value);
                }}
              >
                <option value="">Utan tryck</option>
                <option value="1 färg">1 färg</option>
                <option value="2 färg">2 färg</option>
                <option value="3 färg">3 färg</option>
                <option value="4 färg">4 färg</option>
                <option value="5 färg">5 färg</option>
                <option value="6 färg">6 färg</option>
                <option value="7 färg">7 färg</option>
              </select>
            </label>

            <h4>Bifoga fil och skriv kommentar för alla produkter</h4>
            <input type="file" onChange={handleGlobalFileUpload} />
            <textarea
              placeholder="Beskriv gärna hur du vill använda ditt tryck"
              value={globalComment}
              onChange={handleGlobalCommentChange}
            />

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={applyToAll}
                  onChange={() => setApplyToAll(!applyToAll)}
                />
                Gäller för alla produkter
              </label>
            </div>

            {!applyToAll && (
              <div>
                <h4>Bifoga fil och skriv kommentar för specifika produkter</h4>
                {cartItems.map((item) => (
                  <div key={item.productId}>
                    <p>
                      {item.name} - Färg: {item.selectedColor} - Storlek:{" "}
                      {item.size}
                    </p>
                    <label>Bifoga fil för denna produkt:</label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleFileUploadForProduct(e, item.productId)
                      }
                    />
                    <label>Skriv kommentar för denna produkt:</label>
                    <textarea
                      placeholder="Skriv en kommentar"
                      value={productDetails[item.productId]?.comment || ""}
                      onChange={(e) =>
                        handleCommentChangeForProduct(e, item.productId)
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <Link to="/">Gå till startsidan</Link>
      {cartItems.length > 0 && (
        <button onClick={handleCheckoutClick}>Nästa steg</button>
      )}
    </div>
  );
}

export default CartPage;
