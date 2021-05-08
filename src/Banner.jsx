import React from 'react';

const Banner = ({setModalVisible}) => {

  return (
    
    <div className='banner'>
      <span 
      className="close-control-banner"
      onClick={() => setModalVisible(false)}
      >&#10006;</span>
      <h4>CONGRATULATIONS!
        <br />
        <br />
        You have named 5 Shoppie Nominees.</h4>
        <h5><em>To change your selections, simply remove a nominee and search for a new one.</em></h5>
    </div>
    
  );
};

export default Banner;