import React from 'react';

export const SearchListItem = ({ id, nominate, remove, nominee, maxNomsReached, poster, title, year }) => {

  return (
    <div className='search-item'>
      <div className='search-item-text'>
        {`${title} (${year})`}
      </div>
      <div className='search-nom-button-container'>
        <img className='search-poster' src={(poster.includes('jpg')) ? poster : 'https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png'} alt={title} />
        <span className="nom-icon">{nominee ? '🏆' : ""}</span>
      </div>{ maxNomsReached && !nominee ? <button className='search-nom-disabled'><span className='disabled-text'>Nominate</span></button> :

        <button className={nominee ? 'search-remove-button' : 'search-nom-button'}
        onClick={() => {
          if(!nominee) {
            nominate(title, year, id, poster);
          } else {
            remove(id);
          }
        }}
        disabled={!nominee && maxNomsReached}>{nominee ? 'Remove' : 'Nominate'}
        </button>
      }
    </div>
  );
};