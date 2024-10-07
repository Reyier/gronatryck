import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/product.js"; 
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/ProductGallery.js";
import Radiobutton from "../components/RadioButton.js";
import IncrementButton from "../components/IncrementButton.js";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.productId === id);
  
  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.images.variants[0]?.colorName);
  const [sizeQuantities, setSizeQuantities] = useState({}); 
  const [confirmationMessage, setConfirmationMessage] = useState('');

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (size, quantity) => {
    const newQuantities = {
      ...sizeQuantities,
      [`${selectedColor}-${size}`]: quantity, 
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
    return 0;
  };

  const calculateTotalPriceByArtNr = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce((total, qty) => total + qty, 0);
    const pricePerItem = calculatePricePerItem(totalQuantity);
    const totalPrice = (pricePerItem * totalQuantity).toFixed(2);
    return { totalQuantity, totalPrice, pricePerItem };
  };

  const { totalQuantity, totalPrice, pricePerItem } = calculateTotalPriceByArtNr();

  const removeFromSpecification = (key) => {
    const updatedQuantities = { ...sizeQuantities };
    delete updatedQuantities[key];
    setSizeQuantities(updatedQuantities);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    
    if (!selectedColor || totalQuantity === 0) {
      setConfirmationMessage('Vänligen välj en färg och kvantitet.');
      return;
    }

    // Lägg till varje storlek och kvantitet separat i varukorgen
    Object.entries(sizeQuantities).forEach(([key, quantity]) => {
      if (quantity > 0) {
        const [color, size] = key.split("-");
        const cartItem = {
          productId: product.productId,
          name: product.name,
          brand: product.brand,
          selectedColor: color,
          size,
          totalQuantity: quantity,
          pricePerItem,
          totalPrice: (pricePerItem * quantity).toFixed(2),
        };

        addToCart(cartItem); // Lägg till varje enskild variant i varukorgen
      }
    });

    setConfirmationMessage('Produkten har lagts till i kundvagnen!');
  };

  return ( 
    <div className="container">
      <ul className="breadcrumb">
        <li>Produkter</li>
        <li>{product.category}</li>
        <li>{product.name}</li>
      </ul>
      <hr />
      <main className="product">
        <ProductGallery images={product.images} />
        <section>
          <p>{product.brand}</p>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <hr />
          <form>
            <fieldset>
              <legend>Färg:</legend>
              {product.images.variants.map((variant, index) => (
                <Radiobutton
                  key={index}
                  name={variant.colorName}
                  color={variant.colorCode}
                  onChange={() => handleColorChange(variant.colorName)}
                />
              ))}
            </fieldset>
            <hr />
            <fieldset>
              <legend>Antal</legend>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1.6rem",
                }}
              >
                {product.sizeVariants.map((variant, index) => {
                  const key = `${selectedColor}-${variant}`;
                  return (
                    <IncrementButton 
                      key={index} 
                      id={key} 
                      size={variant} 
                      handleChange={handleQuantityChange} 
                      quantity={sizeQuantities[key] || 0} 
                    />
                  );
                })}
              </div>
            </fieldset>
            <hr />
            <p>Du måste handla minst {product.minBuy} av denna produkt</p>
            <hr />
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
            <hr />
            {totalQuantity > 0 && (
              <div>
                <h3>Prisspecifikation</h3>
                <ul>
                  {Object.entries(sizeQuantities).map(([key, quantity]) => {
                    const [color, size] = key.split("-");
                    if (quantity > 0) {
                      return (
                        <li key={key}>
                          ArtNr: {product.artNr}, Färg: {color}, {size}: ({quantity}) - Pris/ST: {pricePerItem} SEK
                          <button 
                            onClick={() => removeFromSpecification(key)} 
                            style={{ marginLeft: "10px", color: "red" }}
                          >
                            Ta bort
                          </button>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                <h4>Totalt antal: {totalQuantity} </h4>
                <h4>Totalt pris: {totalPrice} SEK </h4>
                <hr></hr> 
              </div>
            )}
            <div style={{ display: "flex", gap: "1.6rem" }}>
              <button 
                style={{ flex: "1" }} 
                className="btn btn--full" 
                type="button" 
                onClick={handleAddToCart}
              >
                Lägg till i offert
              </button>
            </div>
            {confirmationMessage && <p>{confirmationMessage}</p>}
            <p>En offertförfråga hos oss är alltid kostnadfri</p>
          </form>
        </section>
      </main>
    </div>
  ); 
};

export default ProductDetail;
