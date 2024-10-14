import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ProgressTracker from "../components/ProgressTracker";
import "../styles/CartPage.css";
import { darkPrintPrice } from "../data/printPrice";
import products from "../data/product.js";

function CartPage() {
  const [globalComment, setGlobalComment] = useState("");
  const [globalFile, setGlobalFile] = useState(null);
  const [globalPrintType, setGlobalPrintType] = useState(""); 
  const { cartItems, updateCartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleGlobalFileUpload = (e) => setGlobalFile(e.target.files[0]);
  const handleGlobalCommentChange = (e) => setGlobalComment(e.target.value);

  const handleQuantityChange = (item, quantity) => {
    if (quantity <= 0) {
      removeFromCart(item.productId, item.selectedColor, item.size);
    } else {
      updateCartItem(item.productId, item.selectedColor, item.size, quantity);
    }
  };

  const getProductDetails = (productId) => {
    return products.find((product) => product.productId === productId) || {};
  };

  const clothTotalPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const product = getProductDetails(item.productId);
        const pricePerItem = getPriceByTotalQuantity(
          item.totalQuantity,
          product
        );
        return total + pricePerItem * item.totalQuantity;
      }, 0)
      .toFixed(2);
  };

  const getPriceByTotalQuantity = (totalQuantity, product) => {
    const priceTier = product.priceTiers.find((tier) => {
      return (
        totalQuantity >= tier.minQuantity &&
        (tier.maxQuantity === null || totalQuantity <= tier.maxQuantity)
      );
    });
    return priceTier ? priceTier.price : product.priceTiers[0].price;
  };

  const totalPrintPrice = () => {
    return cartItems
      .reduce((total, item) => {
        const printIndex = globalPrintType
          ? parseInt(globalPrintType.split(" ")[0]) - 1
          : 0;
        const printPricePerItem = globalPrintType
          ? getPrintPriceByTotalQuantity(item.totalQuantity, printIndex)
          : 0;
        return total + printPricePerItem * item.totalQuantity;
      }, 0)
      .toFixed(2);
  };

  const getPrintPriceByTotalQuantity = (totalQuantity, printIndex) => {
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

  const handleGlobalPrintTypeChange = (e) => {
    setGlobalPrintType(e.target.value);
  };

  const handleCheckoutClick = () => {
    if (loggedInUser) {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } });
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.totalQuantity, 0);
  };

  // Ny funktion för att navigera till produktens detaljsida
  const navigateToProductDetail = (productId) => {
    navigate(`/products/${productId}`); // Anta att din produktdetaljsida har denna rutt
  };

  return (
    <div className="cartpage">
      <ProgressTracker />
      <h1>Varukorg ({getTotalQuantity()} varor)</h1>

      {cartItems.length === 0 ? (
        <p>Inga varor i varukorgen</p>
      ) : (
        <div className="cart-page-container">
          <div className="cart-content">
          <ul>
              {cartItems.map((item) => {
                const product = getProductDetails(item.productId);

                return (
                 
              
                    <li
                      className="cart-list"
                      key={item.productId + item.selectedColor + item.size}
                    >
                      {/* Link to the product detail page using only productId */}
                      <Link to={`/produkter/${item.productId}`}>
                        <img
                          src={product.images.variants.find(
                            (v) => v.colorName === item.selectedColor
                          )?.images.medium}
                          alt={product.name}
                        />
                        <p>
                          {product.name} - Färg: {item.selectedColor} - Storlek:{" "}
                          {item.size}
                        </p>
                        <p>
                          Pris/st:{" "}
                          {getPriceByTotalQuantity(item.totalQuantity, product)} SEK
                        </p>
                      </Link>
          
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the Link
                            handleQuantityChange(item, item.totalQuantity - 1);
                          }}
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
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the Link
                            handleQuantityChange(item, item.totalQuantity + 1);
                          }}
                        >
                          +
                        </button>
          
                        <button
                          className="remove-btn"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the Link
                            removeFromCart(
                              item.productId,
                              item.selectedColor,
                              item.size
                            );
                          }}
                        >
                          Ta bort
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>

            <h5>Pris för kläder: {clothTotalPrice()} SEK</h5>
            <h5>Pris för tryck: {totalPrintPrice()}</h5>
            <h2>
              Totalt pris:{" "}
              {parseFloat(clothTotalPrice()) + parseFloat(totalPrintPrice())}{" "}
              SEK
            </h2>
          </div>

          {/* Print Container */}
          <div className="print-container">
            <h2>Tryckalternativ:</h2>
            <label>
              Välj tryck:
              <select
                onChange={handleGlobalPrintTypeChange}
                value={globalPrintType}
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
            <h4>Antal: {getTotalQuantity()}</h4>
            <h4>Pris/St: {parseFloat(totalPrintPrice()) / parseFloat(getTotalQuantity())}</h4>
            <h4>Totalt tryckpris: {totalPrintPrice()} SEK</h4>

            {/* Ladda upp fil och kommentar */}
            <div className="file-upload-section">
              <label>
                Ladda upp fil:
                <input type="file" onChange={handleGlobalFileUpload} />
              </label>
              <label>
                Kommentar:
                <textarea
                  value={globalComment}
                  onChange={handleGlobalCommentChange}
                  rows="4"
                  placeholder="Skriv din kommentar här..."
                />
              </label>
            </div>
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
