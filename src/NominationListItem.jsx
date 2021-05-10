import React from 'react';

export const NominationListItem = ({ poster, remove, imdbID, title }) => {

  return (
    <>
      <div className='nom-item'>
        <img className='poster' src={(poster.includes('jpg')) ? poster : 'https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png'} alt={title} />
        <img className='nom-remove-control' onClick={() => { remove(imdbID) }} src="https://cdn1.iconfinder.com/data/icons/bold-purple-part1/32/84_Close_Remove_Circle_Cross_Delete-512.png" height="20" width="20" alt="delete" />
      </div>
    </>
  );
};