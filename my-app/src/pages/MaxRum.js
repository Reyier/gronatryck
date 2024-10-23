import { useParams } from "react-router-dom";
import products from "../data/productnew";
import CardMax from "../components/CardsMax.js";
import Breadcrumb from "../components/Breadcrumb.js";

import "../styles/card.css";
import { useState, useEffect } from "react"; // Import useEffect

export default function Max() {
  /* Hitta produkter från route route */
  const { category } = useParams();
  const [title, setTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category && typeof category === "string") {
      // Om det är en kategori i URLEN, sätt titel och filtrera efter kategorin
      setTitle(category);
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      // Om ingen kategori, visa alla produkter.
      setTitle("Alla profilkläder");
      setFilteredProducts(products);
    }
  }, [category]);

  // Extrahera data, destruct av produkt
  const formatProductData = (product) => {
    const {
      productId: id,
      name,
      category,
      images: { modelUrl }, // Model images in different formats
      variants,
      priceTiers,
      sizeVariants,
    } = product;

    // Get the first variant images in all formats and sizes
    const { small, medium, large } = variants[0]?.images ?? {};

    // Calculate minimum and maximum price
    const minPrice = Math.min(...priceTiers.map((tier) => tier.price));
    const maxPrice = Math.max(...priceTiers.map((tier) => tier.price));

    // Get the length of the sizeVariants array
    const sizeVariantsLength = sizeVariants.length;

    // Get the length of the variants array
    const variantsLength = variants.length;

    // Get all color codes from variants
    const colorCodes = variants.map((variant) => variant.colorCode);

    return {
      id,
      name,
      category,
      modelUrl,
      smallImageFormats: small?.formats,
      mediumImageFormats: medium?.formats,
      largeImageFormats: large?.formats,
      minPrice,
      maxPrice,
      sizeVariantsLength,
      variantsLength,
      colorCodes,
    };
  };

  const formattedProducts = filteredProducts.map(formatProductData);

  return (
    <div className="product-page" style={{ marginBlockStart: "11.5rem" }}>
      <div>
        <h2 className="subheading-1">{title}</h2>
      </div>
      <div className="product-wrapper">
        {formattedProducts.length > 0 ? (
          formattedProducts.map((product) => (
            <CardMax
              key={product.id}
              id={product.id}
              name={product.name}
              category={product.category}
              modelImages={product.modelUrl}
              smallImageFormats={product.smallImageFormats}
              mediumImageFormats={product.mediumImageFormats}
              largeImageFormats={product.largeImageFormats}
              minPrice={product.minPrice}
              maxPrice={product.maxPrice}
              sizeVariantsLength={product.sizeVariantsLength}
              variantsLength={product.variantsLength}
              colorCodes={product.colorCodes}
            />
          ))
        ) : (
          <p>Inga produkter hittades inom den angiva kategorin: {title} </p>
        )}
      </div>
    </div>
  );
}
