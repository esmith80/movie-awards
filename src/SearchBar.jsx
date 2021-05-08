import { React, useState } from 'react';
import SearchBarResults from './SearchBarResults'

const SearchBar = ({ getMovies, setInSearchArea }) => {

  const [searchText, setSearchText] = useState('');
  const [showTypeAhead, setShowTypeAhead] = useState(false);
  const [inTypeAhead, setInTypeAhead] = useState(false);

  return (
    <div className='searchbar'
      onMouseEnter={() => {
        setInSearchArea(true);
      }}
      onMouseLeave={() => {
        setInSearchArea(false);
      }}>
      {/* <label className='searchlabel'>Find movies to nominate</label> */}
      <div
        className='input-search-results-container'
        onBlur={() => {
          if (!inTypeAhead) setShowTypeAhead(false);
        }} // if you hideTypeAhead onBlur the instant you leave the search input field, you lose the typeahead results and so you can't click on them
        onFocus={() => {
          setShowTypeAhead(true)
        }}



      >
        <form action="." onSubmit={(e)=> {
          e.preventDefault();}
        }>

        <input
          placeholder='Search for a movie to nominate...'
          id='search-text'
          type='search'
          name='search-text'
          value={searchText}
          //TODO the searches from Enter and Search button should only run if the text entered is new and has not been already displayed
          //TODO the search should return only a limited amount of results, i think... not infinite scroll? or maybe it could if the infinite scroll stayed in a fixed area
          //TODO (only run if there is a new search term)
          onKeyUp={e => {
            if (e.key === 'Enter' && searchText.trim().length) {
              
              setShowTypeAhead(false);
              window.scrollTo(0, 0);
              getMovies(searchText + '*', 1); // number 1 has to be used because if these buttons are being hit the user needs new results - not necessarily... if they hit it twice to start then they should get 2 pages?
            }
          }}
          onChange={() => { setSearchText(document.getElementById('search-text').value) }
        }
        />
        </form>
        {/* TODO don't display SearchBarResults at all if nothing is typed in, or if there is a new text IS USING a ternary with null OK? */}
        {searchText.trim().length > 2 && showTypeAhead ? <SearchBarResults
          setSearchText={setSearchText}
          searchText={searchText.trim()}
          setShowTypeAhead={setShowTypeAhead}
          getMovies={getMovies}
          setInTypeAhead={setInTypeAhead}
        /> : null}

      </div>
      <button id="btn-search" onClick={() => {
        if (searchText.trim().length) {
          window.scrollTo(0, 0);
          getMovies(searchText.trim() + '*', 1);
        }
      }}>Search</button>
    </div>
  );
};

export default SearchBar;