import { React, useState } from 'react';

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState('');
  return (
    <div>
        <label>Search for movies to add to your nomination list</label>
        <input
          placeholder='Type a movie title...'
          id='search-text'
          type='search'
          name='search-text'
          value={searchText}
          onKeyUp={e => {
            if(e.key === 'Enter') props.getMovies(searchText, 3)
          }}
          //@TODO BUG seems to be stale state search text is one behind 
          onChange={() => setSearchText(document.getElementById('search-text').value)}
        
        />
        <button onClick={() => { props.getMovies(searchText, 3)} }>Search</button>      
    </div>
  );
};

export default SearchBar;