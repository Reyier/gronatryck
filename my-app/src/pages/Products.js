import React, { useState } from 'react';
import products from '../data/product.js';
import Card from '../components/Cards.js';
import '../styles/card.css';
import { useLocation } from 'react-router-dom';

const getUniqueColors = (products) => {
  const colors = new Set();
  products.forEach((product) => {
    product.images.variants?.forEach((variant) => {
      colors.add({
        name: variant.colorName.toLowerCase(),
        code: variant.colorCode,
      });
    });
  });
  return Array.from(colors);
};

const getUniqueBrands = (products) => {
  const brands = new Set();
  products.forEach((product) => {
    if (product.brand) {
      brands.add(product.brand.toLowerCase());
    }
  });
  return Array.from(brands);
};

const getUniqueSizes = (products) => {
  const sizes = new Set();
  products.forEach((product) => {
    product.sizeVariants?.forEach((size) => sizes.add(size));
  });
  return Array.from(sizes);
};

const Products = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const kategori = searchParams.get('kategori')?.toLowerCase();

  const [sort, setSort] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);

  const uniqueColors = getUniqueColors(products);
  const uniqueBrands = getUniqueBrands(products);
  const uniqueSizes = getUniqueSizes(products);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = kategori
      ? product.name.toLowerCase().includes(kategori) || 
        product.category.toLowerCase().includes(kategori)
      : true;

    const matchesColor = selectedColors.length > 0
      ? product.images.variants?.some((variant) => selectedColors.includes(variant.colorName.toLowerCase()))
      : true;

    const matchesBrand = selectedBrands.length > 0
      ? selectedBrands.includes(product.brand?.toLowerCase())
      : true;

    const matchesSize = selectedSizes.length > 0
      ? selectedSizes.some(size => product.sizeVariants?.includes(size))
      : true;

    return matchesSearch && matchesColor && matchesBrand && matchesSize;
  }).sort((a, b) => {
    if (sort === 'Nyast') return b.date - a.date;
    if (sort === 'Lägsta pris') return a.priceTiers[0]?.price - b.priceTiers[0]?.price;
    if (sort === 'Högsta pris') return b.priceTiers[0]?.price - a.priceTiers[0]?.price;
    if (sort === 'Deals') return a.discount ? -1 : 1;
    return 0;
  });

  const productCards = filteredProducts.map((product) => {
    const { productId, name, category, images, sizeVariants, priceTiers } = product;
    const { modelUrl, variants } = images;

    const minPrice = Math.min(...priceTiers.map((tier) => tier.price));
    const maxPrice = Math.max(...priceTiers.map((tier) => tier.price));

    const firstVariantImage = variants[0]?.images;
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

  const resetFilters = () => {
    setSort('');
    setSelectedColors([]);
    setSelectedBrands([]);
    setSelectedSizes([]);
    setIsColorDropdownOpen(false);
    setIsBrandDropdownOpen(false);
    setIsSizeDropdownOpen(false);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  return (
    <div className="product-wrapper">
      <h2>{kategori ? `Sökresultat för "${kategori}"` : ''}</h2>
      <div className="filter-wrapper">
        
        <label>
          Sortera:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Välj sortering</option>
            <option value="Nyast">Nyast</option>
            <option value="Lägsta pris">Lägsta pris</option>
            <option value="Högsta pris">Högsta pris</option>
            <option value="Deals">Deals</option>
          </select>
        </label>

        <div className="filter-group">
          <button 
            className="filter-button" 
            onClick={() => setIsColorDropdownOpen((prev) => !prev)}
          >
            Färg {selectedColors.length > 0 && `(${selectedColors.length})`}
          </button>
          {isColorDropdownOpen && (
            <div className="dropdown-menu">
              {uniqueColors.map((color) => (
                <label key={color.name} style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    value={color.name} 
                    checked={selectedColors.includes(color.name)} 
                    onChange={() => handleColorChange(color.name)} 
                    style={{ marginRight: '10px' }}
                  />
                  <span style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: color.code,
                    borderRadius: '50%',
                    marginRight: '8px',
                    verticalAlign: 'middle'
                  }}></span>
                  {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="filter-group">
          <button 
            className="filter-button" 
            onClick={() => setIsBrandDropdownOpen((prev) => !prev)}
          >
            Varumärke {selectedBrands.length > 0 && `(${selectedBrands.length})`}
          </button>
          {isBrandDropdownOpen && (
            <div className="dropdown-menu">
              {uniqueBrands.map((brand) => (
                <label key={brand} style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    value={brand} 
                    checked={selectedBrands.includes(brand)} 
                    onChange={() => handleBrandChange(brand)} 
                    style={{ marginRight: '10px' }}
                  />
                  {brand.charAt(0).toUpperCase() + brand.slice(1)}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="filter-group">
          <button 
            className="filter-button" 
            onClick={() => setIsSizeDropdownOpen((prev) => !prev)}
          >
            Storlek {selectedSizes.length > 0 && `(${selectedSizes.length})`}
          </button>
          {isSizeDropdownOpen && (
            <div className="dropdown-menu">
              {uniqueSizes.map((size) => (
                <label key={size} style={{ display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="checkbox" 
                    value={size} 
                    checked={selectedSizes.includes(size)} 
                    onChange={() => handleSizeChange(size)} 
                    style={{ marginRight: '10px' }}
                  />
                  {size}
                </label>
              ))}
            </div>
          )}
        </div>

        <button onClick={resetFilters} style={{ marginTop: '10px' }}>
          Återställ filter
        </button>
      </div>

      {productCards.length > 0 ? (
        productCards.map((card) => (
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
        ))
      ) : (
        <p>Inga produkter hittades för din sökning.</p>
      )}
    </div>
  );
};

export default Products;