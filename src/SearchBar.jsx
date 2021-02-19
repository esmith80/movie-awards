import { React, useState } from 'react';
import SearchBarResults from './SearchBarResults'

const SearchBar = ({ getMovies }) => {

  const [searchText, setSearchText] = useState('');


  return (
    <div className='searchbar'>
      <label className='searchlabel'>Find movies to nominate</label>
      <div className='input-search-results-container'>
        <input
          placeholder='Type a movie title...'
          id='search-text'
          type='search'
          name='search-text'
          value={searchText}
          //TODO the searches from Enter and Search button should only run if the text entered is new and has not been already displayed
          //TODO a search should be triggered automatically if someone types 3 characters
          //TODO the search should return only a limited amount of results, i think... not infinite scroll? or maybe it could if the infinite scroll stayed in a fixed area
          //TODO should be a debounce function that doesn't search with every new key type... only every 3 characters or every 1 second - whatever comes first 
          //TODO (only run if there is a new search term)
          onKeyUp={e => {
            if (e.key === 'Enter' && searchText.trim().length) {
              getMovies(searchText + '*', 1); // number 1 has to be used because if these buttons are being hit the user needs new results - not necessarily... if they hit it twice to start then they should get 2 pages?
            }
          }}
          onChange={() => { setSearchText(document.getElementById('search-text').value) }
          }
        />
        {/* TODO don't display SearchBarResults at all if nothing is typed in, or if there is a new text IS USING a ternary with null OK? */}
        {/* {searchText ? <SearchBarResults
          searchText={searchText}
        /> : null} */}
      </div>
      <button onClick={() => {
        if (searchText.trim().length) {
          getMovies(searchText + '*', 1)
        }
      }}>Search</button>
    </div>
  );
};

export default SearchBar;