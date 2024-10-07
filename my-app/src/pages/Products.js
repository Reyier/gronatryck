// src/pages/Products.js
import React from 'react';
//import { Link } from 'react-router-dom';
// import productData from '../data/products.json';
import products from '../data/product.js';
import Card from '../components/Cards.js';
import '../styles/card.css';


console.log(products);

const Products = () => {
  const productCards = products.map((product) => {
    const { productId, name, category, images, sizeVariants, priceTiers } =
      product;
    const { modelUrl, variants } = images;
  
    const minPrice = Math.min(...priceTiers.map((tier) => tier.price));
    const maxPrice = Math.max(...priceTiers.map((tier) => tier.price));
  
    const firstVariantImage = variants[0].images;
    const colorCodes = variants.slice(0, 2).map((variant) => variant.colorCode);
  
    return {
      productId,
      name,
      category,
      modelImage: modelUrl,
      firstVariantImage,
      minPrice,
      maxPrice,
      sizeVariantsCount: sizeVariants.length,
      variantsCount: variants.length,
      colorCodes,
    };
  });
  return (
    <div className="product-wrapper">
       {productCards.map((card) => {
      return (
        <Card
          key={card.productId}
          id={card.productId}
          name={card.name}
          category={card.category}
          modelImage={card.modelImage}
          firstVariantImage={card.firstVariantImage}
          minPrice={card.minPrice}
          maxPrice={card.maxPrice}
          sizeVariantsCount={card.sizeVariantsCount}
          variantsCount={card.variantsCount}
          colorCodes={card.colorCodes}
        />
      );
    })}
    </div>

    
  );
   



    
 

};


export default Products;
