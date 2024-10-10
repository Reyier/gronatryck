import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/product.js"; 
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/ProductGallery.js";
import Radiobutton from "../components/RadioButton.js";
import IncrementButton from "../components/IncrementButton.js";
import {darkPrintPrice} from "../data/printPrice"; 


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.productId === id);
  // const print = darkPrintPrice.find((price) => price.amount === );
  //const price = darkPrintPrice.find((price) => price.amount[1]);
  const [printIndex, setPrintIndex] = useState("");
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useCart();
  
  const [selectedColor, setSelectedColor] = useState(product.images.variants[0]?.colorName);
  const [sizeQuantities, setSizeQuantities] = useState({}); 
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [printType, setPrintType] = useState("dark"); // State to handle the selected print type
  const [selectedPrintType, setSelectedPrintType] = useState("");
  
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

  const getPriceByTotalQuantity = (totalQuantity) => {
    console.log(printIndex)
    if (totalQuantity < 50) {
      return darkPrintPrice.amount[25][printIndex]; // Hämta värdet från 25 om totalQuantity är under 25
    } else if (totalQuantity < 100) {
      return darkPrintPrice.amount[50][printIndex]; // Hämta värdet från 50 om totalQuantity är under 50
    } else if (totalQuantity < 250) {
      return darkPrintPrice.amount[100][printIndex]; // Hämta värdet från 100 om totalQuantity är under 100
    } else if (totalQuantity < 500) {
      return darkPrintPrice.amount[250][printIndex]; // Hämta värdet från 250 om totalQuantity är under 250
    } else {
      return darkPrintPrice.amount[500][printIndex]; // Hämta värdet från 250 om totalQuantity är under 250
  };
  };
  
  const calculateTotalPriceByArtNr = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce((total, qty) => total + qty, 0);
    const pricePerItem = calculatePricePerItem(totalQuantity);
    const clothprice = (pricePerItem * totalQuantity).toFixed(2);
    
    return { totalQuantity, clothprice, pricePerItem };
    
  };

  const { totalQuantity, clothprice, pricePerItem } = calculateTotalPriceByArtNr();
const totalPrintPrice = getPriceByTotalQuantity(totalQuantity)* totalQuantity;



/////// Beräkning + schablon


const totalPrice = totalPrintPrice + clothprice



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
          clothprice: (pricePerItem * quantity).toFixed(2),
        };

        addToCart(cartItem); // Lägg till varje enskild variant i varukorgen
      }
    });

    setConfirmationMessage('Produkten har lagts till i kundvagnen!');
  };

  // Determine which print prices to use based on the print type (light or dark)
  const printPrice = darkPrintPrice;

  



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


            <label>
              Tryck:
              <select onChange={((e) => {
                const hej = e.target.value.slice(0, 1) - 1;
                setPrintIndex(hej);
                setSelectedPrintType(e.target.value)
              })}>
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
        <hr/>

                


   {/* Updated Price Table */}
<h3>Prisinformation</h3>
<table>
  <thead>
    <tr>
      <td>Antal</td>
      {/* Visa kvantiteter som kolumnrubriker */}
      {product.priceTiers.map((tier, index) => (
        <th key={index}>
          {tier.maxQuantity !== null ? `${tier.minQuantity}-${tier.maxQuantity}` : `${tier.minQuantity}+`}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {/* Rad för Pris per styck */}
    <tr>
      <td>Pris/st</td>
      {product.priceTiers.map((tier, index) => (
        <td key={index}>{tier.price} SEK</td>
      ))}
    </tr>

    <tr>
            <td>Tryckpris en färg</td>
            {Object.keys(printPrice.amount).map((key, index) => (
              <td key={index}>
                {printPrice.amount[key][0]} SEK
              </td>
            ))}
          </tr>

        
          <tr>
          <td>Schablon en färg</td>
          <td>{printPrice.schablon[1]} SEK</td>
          </tr> 


        

        
  </tbody>
</table>
<th>
          <small > Obs: Tryck- och schablonkostnaderna varierar beroende på plaggets färg och vald tryckmetod. Du kan även välja flerfärgsalternativ, vilket påverkar tryckpriset.</small>
        
        </th>



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

                          Totalt: {pricePerItem * quantity}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
                <ul>
   
    <li>Färgtryck: {selectedPrintType || "Inget valt"} {getPriceByTotalQuantity(totalQuantity)} SEK/ST Totalt: {totalPrintPrice} </li>
    
  </ul>
                <ul>
                Schablon
                </ul>
                <h4>Totalt antal: {totalQuantity} </h4>
                <h4>Totalt pris: {clothprice} SEK </h4>
                <h4>Totalt pris: {totalPrintPrice} SEK </h4>
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
