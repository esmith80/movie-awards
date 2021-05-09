import React from 'react';

const Banner = ({setShowMessage}) => {

  return (
    
    <div className='banner'>
      
      <h4>Hello, Shopify hiring team!</h4>
      <span 
      className="close-control-banner"
      onClick={() => setShowMessage(false)}
      >&#10006;</span>
      <p>This site fulfills the base requirements of the Shopify front-end take-home assignment. It also has the following features:</p>
          <ul>
            <li>nominations are saved in local storage</li>
            <li>clickable type-ahead search results</li>
            <li>infinite scroll of main search results</li>
            <li>starts-with search (default behaviour)</li>
            <li>responsive site (OK to view on mobile device)</li>
          </ul>

          <h4>Thank you for your consideration.</h4>
          <p><em>Ed Smith</em></p>
    </div>
    
  );
};

export default Banner;