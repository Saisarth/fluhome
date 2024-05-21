import React from 'react';

const TopNav = () => {
  return (
    <nav>
      <button onClick={() => window.location.href = 'https://furrl.in/wishlist'}>Wishlist</button>
      <button onClick={() => window.location.href = 'https://furrl.in/cart'}>Cart</button>
    </nav>
  );
};

export default TopNav;
