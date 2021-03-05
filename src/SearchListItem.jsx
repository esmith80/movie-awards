import React from 'react';

export const SearchListItem = ({ id, nominate, nominee, maxNomsReached, poster, title, year }) => {

  return (
    <div className='search-item'>
      <div className='search-item-text'>
        {`${title} (${year})`}
      </div>
      <div className='search-nom-button-container'>
        <img className='search-poster' src={(poster.includes('jpg')) ? poster : 'https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png'} alt={title} />
        <button className='search-nom-button'
          onClick={() => {
            nominate(title, year, id, poster);
          }}
          disabled={nominee || maxNomsReached}>{nominee ? '🏆' : 'Nominate'}
        </button>
      </div>
    </div>
  );
};