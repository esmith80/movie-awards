import { React, useState } from 'react';



const SearchBar = (props) => {
  
  const [searchText, setSearchText] = useState('');
  return (
    <div className='searchbar'>
        <label class='searchlabel'>Find movies to nominate</label>
        <input
          placeholder='Type a movie title...'
          id='search-text'
          type='search'
          name='search-text'
          value={searchText}
          onKeyUp={e => {
            if(e.key === 'Enter' && searchText.trim().length) props.getMovies(searchText+'*', 10)
          }}
          //@TODO BUG seems to be stale state search text is one behind 
          onChange={() => { setSearchText(document.getElementById('search-text').value)}
        }
        
        />
        <button onClick={() => { 
          if(searchText.trim().length) {
          props.getMovies(searchText+'*', 10)} 
        }}>Search</button>      
    </div>
  );
};

export default SearchBar;