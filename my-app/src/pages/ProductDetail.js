import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productData from "../data/products.json"; // Assumes you have a JSON file with product data
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData.products.find((p) => p.id === parseInt(id));
  
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.colorVariants[0]?.colorName);
  const [sizeQuantities, setSizeQuantities] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState('');

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  const handleQuantityChange = (size, value) => {
    const newQuantities = {
      ...sizeQuantities,
      [`${selectedColor}-${size}`]: value,
    };
    setSizeQuantities(newQuantities);
  };

  const calculatePricePerItem = (quantity) => {
    const { priceTiers } = product;

    for (const tier of priceTiers) {
      if (
        quantity >= tier.minQuantity &&
        (tier.maxQuantity === null || quantity <= tier.maxQuantity)
      ) {
        return tier.price;
      }
    }
    return 0; // If no tier matches
  };

  const calculateTotalPriceByArtNr = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce((total, qty) => total + qty, 0);
    const pricePerItem = calculatePricePerItem(totalQuantity);
    const totalPrice = (pricePerItem * totalQuantity).toFixed(2);

    return { totalQuantity, totalPrice, pricePerItem };
  };

  const { totalPrice, pricePerItem } = calculateTotalPriceByArtNr();

  const handleAddToCart = () => {
    if (Object.values(sizeQuantities).every(qty => qty <= 0)) {
      alert("Vänligen ange kvantitet för minst en storlek.");
      return;
    }

    Object.entries(sizeQuantities).forEach(([key, quantity]) => {
      if (quantity > 0) {
        const [color, size] = key.split("-");
        addToCart({ id: product.id, color, size, quantity });
      }
    });

    setConfirmationMessage(`Varan har lagts till i varukorgen!`);
    setTimeout(() => setConfirmationMessage(""), 3000);
  };

  const removeFromSpecification = (key) => {
    const updatedQuantities = { ...sizeQuantities };
    delete updatedQuantities[key];
    setSizeQuantities(updatedQuantities);
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.images.main} alt={product.name} style={{ width: "300px", height: "auto" }} />
      <p>{product.description}</p>

      <h3>Färgalternativ</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {product.colorVariants.map((color) => (
          <div
            key={color.colorName}
            style={{
              backgroundColor: color.colorCode,
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              border: selectedColor === color.colorName ? "2px solid #000" : "1px solid #ddd",
              cursor: "pointer",
            }}
            title={color.colorName}
            onClick={() => setSelectedColor(color.colorName)}
          />
        ))}
      </div>

      <h3>Storlekar</h3>
      <ul>
        {product.sizeVariants.map((size) => (
          <li key={size}>
            {size}:
            <input
              type="number"
              min="0"
              value={sizeQuantities[`${selectedColor}-${size}`] || 0}
              onChange={(e) => handleQuantityChange(size, parseInt(e.target.value) || 0)}
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </li>
        ))}
      </ul>

      <h3>Pristabell</h3>
      <table>
        <thead>
          <tr>
            <th>Min. Kvantitet</th>
            <th>Max. Kvantitet</th>
            <th>Pris per styck (SEK)</th>
          </tr>
        </thead>
        <tbody>
          {product.priceTiers.map((tier, index) => (
            <tr key={index}>
              <td>{tier.minQuantity}</td>
              <td>{tier.maxQuantity !== null ? tier.maxQuantity : "+"}</td>
              <td>{tier.price} SEK</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Prisspecifikation</h3>
      <ul>
        {Object.entries(sizeQuantities).map(([key, quantity]) => {
          const [color, size] = key.split("-");
          if (quantity > 0) {
            return (
              <li key={key}>
                ArtNr: {product.artNr}, Färg: {color}, {size}: ({quantity}) - Pris/ST: {pricePerItem} SEK
                <button onClick={() => removeFromSpecification(key)} style={{ marginLeft: "10px", color: "red" }}>
                  Ta bort
                </button>
              </li>
            );
          }
          return null;
        })}
      </ul>

      <h4>Totalt pris: {totalPrice} SEK</h4>

      <button onClick={handleAddToCart} style={{ marginTop: "20px" }}>
        Lägg till i varukorg
      </button>

      {/* Confirmation message */}
      {confirmationMessage && (
  <div
    style={{
      marginTop: "20px",
      padding: "10px",
      color: "#fff",
      backgroundColor: "#4CAF50",
      borderRadius: "5px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
    {confirmationMessage}
  </div>
)}
    </div>
  );
};

export default ProductDetail;
