import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/product.js";
import { useCart } from "../context/CartContext";
import ProductGallery from "../components/ProductGallery.js";
import Radiobutton from "../components/RadioButton.js";
import IncrementButton from "../components/IncrementButton.js";
import { darkPrintPrice } from "../data/printPrice";
import Breadcrumb from "../components/Breadcrumb.js";
import "../styles/button.css";
import "../styles/productdetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.productId === id);
  const { addToCart } = useCart();

  // State variables
  const [printIndex, setPrintIndex] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.images.variants[0]?.colorName);
  const [sizeQuantities, setSizeQuantities] = useState({});
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // for read more functionality
  const [openSection, setOpenSection] = useState(null); // Track which section is open

  // Toggle open section function
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section); // Toggle logic
  };

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
    console.log(printIndex);
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

  const calculateTotalPriceByArtNr = () => {
    const totalQuantity = Object.values(sizeQuantities).reduce(
      (total, qty) => total + qty,
      0
    );
    const pricePerItem = calculatePricePerItem(totalQuantity);
    const clothprice = (pricePerItem * totalQuantity).toFixed(2);

    return { totalQuantity, clothprice, pricePerItem };
  };

  const { totalQuantity, clothprice, pricePerItem } =
    calculateTotalPriceByArtNr();
  const totalPrintPrice =
    getPriceByTotalQuantity(totalQuantity) * totalQuantity;

  let totalPrintPriceNumber = parseFloat(totalPrintPrice) || 0;
  let clothpriceNumber = parseFloat(clothprice) || 0;
  let totalPrice;

  if (totalPrintPriceNumber === 0) {
    totalPrice = clothpriceNumber;
  } else {
    totalPrice = totalPrintPriceNumber + clothpriceNumber;
  }

  const removeFromSpecification = (key) => {
    const updatedQuantities = { ...sizeQuantities };
    delete updatedQuantities[key];
    setSizeQuantities(updatedQuantities);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (!selectedColor || totalQuantity === 0) {
        setConfirmationMessage("Vänligen välj en färg och kvantitet.");
        return;
    }

    // Iterate over size quantities and add to cart for each size/color combo
    Object.entries(sizeQuantities).forEach(([key, quantity]) => {
        if (quantity > 0) {
            const [color, size] = key.split("-");
            const cartItem = {
                productId: product.productId,
                name: product.name,
                brand: product.brand,
                selectedColor: color,
                size: size,
                totalQuantity: quantity,
                pricePerItem: calculatePricePerItem(quantity),
                clothprice: (calculatePricePerItem(quantity) * quantity).toFixed(2),
                totalPrintPrice: getPriceByTotalQuantity(totalQuantity) * quantity,
                totalPrice: (
                    parseFloat((calculatePricePerItem(quantity) * quantity).toFixed(2)) +
                    getPriceByTotalQuantity(totalQuantity) * quantity
                ).toFixed(2),
            };

            console.log("Adding to cart:", cartItem);
            addToCart(cartItem); // This will either add a new item or update the quantity
        }
    });

    setConfirmationMessage("Produkten har lagts till i offerten!");
};

  useEffect(() => {
    if (confirmationMessage) {
      const timer = setTimeout(() => {
        setConfirmationMessage(""); 
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [confirmationMessage]);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = product.description.length > 150
  ? `${product.description.substring(0, 150)}...`
  : product.description;


  const printPrice = darkPrintPrice;

  return (
    <div>
    <Breadcrumb />
    <div className="container">
      
      <main className="product">
        <ProductGallery images={product.images} />
        <section>
          <p className="brand-name">{product.brand}</p>
          <h1 className="heading-2">{product.name}</h1>





          <p className="product-description">
            {isExpanded ? product.description : truncatedDescription}
          </p>
          <button onClick={toggleDescription} className="read-more-btn">
            {isExpanded ? "" : "Läs mer"}
          </button>






          <div className="certificate-container">
            {product.certificates.map((certificate, index) => (
              <div key={index} className="certificate-item">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={certificate.img}
                    alt={certificate.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/img/default-image.svg";
                    }}
                  />
                </a>
              </div>
            ))}
          </div>

          <form>
            <fieldset>
              <legend className="main-body">Färg:</legend>
              {product.images.variants.map((variant, index) => (
                <Radiobutton
                  key={index}
                  name={variant.colorName}
                  color={variant.colorCode}
                  onChange={() => handleColorChange(variant.colorName)}
                />
              ))}
            </fieldset>

            <div className="size-container">
              <fieldset>
                <legend className="main-body">Antal</legend>
                <div className="grid-container">
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
            </div>
            <div className="main-body">
              <p>
                Minst antal utan tryck: {product.minBuy} st
              </p>
              <p>Minst antal med tryck: 25 st</p>
            </div>

            {/* Prisinformation Section */}
            <div className="collapse-container">
              <h3
                className="main-body"
                onClick={() => toggleSection("price")}
                style={{ cursor: "pointer" }}
              >
                Prisinformation
                <span className="toggle-arrow">
                  {openSection === "price" ? "▲" : "▼"}
                </span>
              </h3>

              {/* Wrap the table and additional info in a single div */}
              {openSection === "price" && (
                <div>
                  <table>
                    <thead>
                      <tr>
                        <td>Antal</td>
                        {product.priceTiers.map((tier, index) => (
                          <th key={index}>
                            {tier.maxQuantity !== null
                              ? `${tier.minQuantity}-${tier.maxQuantity}`
                              : `${tier.minQuantity}+`}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pris (SEK/st)</td>
                        {product.priceTiers.map((tier, index) => (
                          <th key={index}>{tier.price} </th>
                        ))}
                      </tr>
                      <tr>
                        <td>Tryckpris en färg (SEK)</td>
                        {Object.keys(printPrice.amount).map((key, index) => (
                          <th key={index}>{printPrice.amount[key][0]} </th>
                        ))}
                      </tr>
                      <tr>
                        <td>Schablon en färg(SEK)</td>
                        <th>{printPrice.schablon[1]} </th>
                      </tr>
                    </tbody>
                  </table>
                  <p className="main-body">
                    Obs: Tryck -och schablonkostnaderna varierar beroende på
                    plaggets färg och tryckmetod. Du kan även välja
                    flerfärgsalternativ, vilket påverkar tryckpriset.
                  </p>
                </div>
              )}
            </div>

            {/* Produktinformation Section */}

            <div className="collapse-container">
              <h3
                className="main-body"
                onClick={() => toggleSection("product")}
                style={{ cursor: "pointer" }}
              >
                Specifikationer
                <span className="toggle-arrow">
                  {openSection === "product" ? "▲" : "▼"}
                </span>
              </h3>

              {/* Wrap the product details in a single div */}
              {openSection === "product" && (
                <div className="product-collapse">
                  <table>
                    <tbody>
                      <tr>
                        <td>Artikelnummer</td>
                        <td>{product.artNr}</td>
                      </tr>

                      <tr>
                      <td></td>
                        <td>{product.description}</td>
                      </tr>
                      <tr>
                        <td>Storlek</td>
                        <td>
                          Finns i storlekarna: {product.sizeVariants.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td>Material</td>
                        <td>{product.material}</td>
                      </tr>
                      <tr>
                        <td>Materialvikt</td>
                        <td>{product.weight}</td>
                      </tr>

                      <tr>
                        <td>Egenskaper</td>
                        <td>
                          <ul>
                            {product.properties.map((property, index) => (
                              <li key={index}>{property}</li>
                            ))}
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td>Certifikat</td>
                        <td>
                          <ul>
                            {product.certificates.map((certificate, index) => (
                              <li key={index}>
                                <a
                                  href={certificate.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {certificate.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

           

            {totalQuantity > 0 && (
              <div className="order-container">
                 <hr />
                <h4>Din beställning:</h4>

                <ul>
                 
        {Object.entries(sizeQuantities).map(([key, quantity]) => (
          <li key={key}>
             <p>
                Färg: {""}
              
            {key}:  {quantity} 
            <button className="remove-btn" onClick={() => removeFromSpecification(key)}>Ta bort</button>
            </p>
          </li>
        ))}
      </ul>
              
                <p>
                  Antal: <span>{totalQuantity}</span>
                </p>
                <p>Pris per styck {pricePerItem} SEK</p>
                <p>
                  Totalt pris: <span>{totalPrice.toFixed(2)} SEK</span>
                </p>

                <div className="button-container">
                  <button onClick={handleAddToCart} className="main-btn">
                    Lägg till i offert
                  </button>
                </div>

                {confirmationMessage && (
              <p className="confirmation-message">{confirmationMessage}</p>
            )}
                <div className="small-spacing">
                <p className="main-body">
                  Vår offert är flexibel! Du kan justera dina val innan du
                  bekräftar, så att du får det du verkligen vill ha.
                </p>
                </div>
              </div>
            )}
           
          </form>
        </section>
      </main>
    </div>
    </div>
  );
};

export default ProductDetail;
