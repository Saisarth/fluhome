import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const response = await fetch(`API_ENDPOINT?page=${page}`);
      const data = await response.json();
      setProducts(prev => [...prev, ...data.products]);
      setLoading(false);
    };
    loadProducts();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {products.map(product => <ProductItem key={product.id} product={product} />)}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default ProductList;
