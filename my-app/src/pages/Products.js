// src/pages/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../data/products.json';

const Products = () => {
  return (
    <div className="products">
      <h1>Produkter</h1>
      <div className="product-list" style={styles.productList}>
        {productData.products.map((product) => (
          <div key={product.id} className="product-card" style={styles.card}>
            <img src={product.images.main} alt={product.name} style={styles.image} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Pris från: {product.priceTiers[0].price} SEK</p>
            <p>Kategori: {product.category}</p>
            {/* Se till att länken går till rätt URL */}
            <Link to={`/ProductDetail/${product.id}`} style={styles.link}>Visa mer</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default Products;
