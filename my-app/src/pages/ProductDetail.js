// src/pages/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/products.json'; // Samma JSON-fil med produktdata

const ProductDetail = () => {
  const { id } = useParams(); // Hämta produktens ID från URL
  const product = productData.products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Produkten hittades inte.</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.images.main} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p>{product.description}</p>
      <p>Kategori: {product.category}</p>
      <p>Pris från: {product.priceTiers[0].price} SEK</p>
      <p>Artikelnummer: {product.artNr}</p>

      <h3>Färgalternativ</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {product.colorVariants.map((color) => (
          <div key={color.colorName} style={{ backgroundColor: color.colorCode, width: '50px', height: '50px', borderRadius: '50%' }} title={color.colorName} />
        ))}
      </div>

      <h3>Storlekar</h3>
      <ul>
        {product.sizeVariants.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
