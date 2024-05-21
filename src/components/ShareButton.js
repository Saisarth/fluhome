import React from 'react';

const ShareButton = ({ url }) => {
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this product!',
        url: url
      }).catch(console.error);
    } else {
      alert('Share feature is not supported in your browser.');
    }
  };

  return <button onClick={share}>Share</button>;
};

export default ShareButton;
