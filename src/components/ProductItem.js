import React from 'react';
import ShareButton from './ShareButton';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => window.location.href = `https://furrl.in/product/${product.id}`}>View Product</button>
      <ShareButton url={`https://furrl.in/product/${product.id}`} />
    </div>
  );
};

export default ProductItem;
