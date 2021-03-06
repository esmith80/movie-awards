import React, { useEffect } from 'react';
import { SearchListItem } from './SearchListItem';

function SearchList({ nominate, remove, movies, maxNomsReached, lastSearchTerm, getMovies, handlePageChange, searchPage, setInSearchArea, setShowSearchResults }) {


  let scrolling = false;
  let scrollLoop;
  let lastOffPagePx = 0;

  function handleScroll() {
    scrolling = true;
    // TODO have this code reviewed - is this the way to implement clearing the interval (included of logic of cancelling the event handler and also clearing it if a new one is to be set up?)
    if (scrollLoop) clearInterval(scrollLoop);
    scrollLoop = setInterval(() => {
      if (scrolling) {
        scrolling = false;
        // pageHeight is entire height of the page (even if it's off screen)
        const pageHeight = document.getElementById('root').scrollHeight;
        const offPagePxBelow = pageHeight - window.innerHeight - window.scrollY;
        lastOffPagePx = offPagePxBelow;

        // lastOffPagePx condition is so event only triggers when scrolling down
        if (offPagePxBelow < 10 && offPagePxBelow <= lastOffPagePx) {
          getMovies(lastSearchTerm + '*', searchPage + 1);
          handlePageChange(searchPage + 1);
        }
      }
    }, 250);

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // returning the cleanup function will ensure that next time this useEffect runs, the cleanup function from the previous render will already be available to remove the listener??
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(scrollLoop);
    }
  });

  // TODO possible refactor - why build this each time, can't we just pass down an array?
  const searchListItems = [];
  for (let i = 0; i < movies.length; i++) {
    // make an array of SearchListItems
    if (movies[i]) {
      searchListItems.push(
        <SearchListItem
          key={i}
          id={movies[i].imdbID}
          title={movies[i].Title}
          year={movies[i].Year}
          poster={movies[i].Poster}
          nominate={nominate}
          remove={remove}
          nominee={movies[i].nominee}
          maxNomsReached={maxNomsReached}
        />);
    }
  }

  return (

    <div className='search-container'
      onMouseEnter={() => {
        setInSearchArea(true);
      }}
      onMouseLeave={() => {
        setInSearchArea(false);
      }}
    >
      <div className="close-control"
        onClick={() => {
          setShowSearchResults(false);
        }}
      >&#10006;</div>

      {searchListItems}

    </div>
  );
}

export default SearchList;