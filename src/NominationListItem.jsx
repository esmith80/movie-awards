import React from 'react';

export const NominationListItem = ({ poster, remove, imdbID, title }) => {

  return (
    <>
      <div className='nom-item'>
        <img className='poster' src={(poster.includes('jpg')) ? poster : 'https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png'} alt={title} />
        <button className='nom-button' onClick={() => { remove(imdbID) }}>Remove</button>
      </div>
    </>
  );
};