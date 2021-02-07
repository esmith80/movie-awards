import { React, useState } from 'react';

const SearchBar = ({ searchPage, setSearchPage, getMovies, setMovies }) => {

  const [searchText, setSearchText] = useState('');

  return (
    <div className='searchbar'>
      <label className='searchlabel'>Find movies to nominate</label>
      <input
        placeholder='Type a movie title...'
        id='search-text'
        type='search'
        name='search-text'
        value={searchText}
        //TODO the searches from Enter and Search button should only run if the text entered is new and has not been already displayed
        onKeyUp={e => {
          if (e.key === 'Enter' && searchText.trim().length) {
            // setMovies({});
            // setSearchPage(1);
            getMovies(searchText + '*', 1); // number 1 has to be used because if these buttons are being hit the user needs new results - not necessarily... if they hit it twice to start then they should get 2 pages?
          }
        }}
        onChange={() => { setSearchText(document.getElementById('search-text').value) }
        }
      />
      <button onClick={() => {
        if (searchText.trim().length) {
          // setMovies({});
          // setSearchPage(1);
          getMovies(searchText + '*', 1)
        }
      }}>Search</button>
    </div>
  );
};

export default SearchBar;