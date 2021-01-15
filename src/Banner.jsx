import React from 'react';

const Banner = () => {
  return (
    <div className='banner'>
      <h4>Congratulations! You have selected all the nominees!</h4>
      {/* TODO get logo working */}
      <img src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/50/Shopify-line-transparent-512.png" alt="shoppies-logo" height="100" width="100"/>
    </div>
  );
};

export default Banner;