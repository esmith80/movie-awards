import React from 'react';

const SearchBarResultItem = ({ title, setSearchText }) => {
  return (
    <div className='searchbar-result-item'
      onClick={() => { if (!title.startsWith("no results for ")) setSearchText(title) }}>
      {title}
    </div>
  );
};

export default SearchBarResultItem;