import React from 'react';

const SearchBarResultItem = ({ title, setSearchText, getMovies, searchText, setShowTypeAhead }) => {
  return (
    <div className='searchbar-result-item'
      onClick={() => {
        if (!title.startsWith("no results for ")) setSearchText(title);
        // TODO if the title contains certain characters (minus sign, ampersand, it will return no search results) state here, search text that is clicked is not the actual movie
        window.scrollTo(0, 0);
        getMovies(title, 1);
        setShowTypeAhead(false);
      }}
    >

      { title}
    </div>
  );
};

export default SearchBarResultItem;