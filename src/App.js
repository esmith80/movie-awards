import { React, useState } from 'react';
import './App.css';
import SearchList from './SearchList';
import NominationList from './NominationList';
import SearchBar from './SearchBar';
import Banner from './Banner';
const axios = require('axios');


function App() {
  // localStorage will hold user's nomination if they've visited website before
  // go through each item in local storage. if the key is an imdbID, put it in the nominees array  
  const localNoms = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let nom = localStorage[key];
    if (key.match(/tt\d{7}/g)) {
      nom = JSON.parse(nom);
      localNoms.push(nom)
    }
  }

  const [movies, setMovies] = useState({});
  const [noResults, setNoResults] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [nominees, setNominees] = useState(localNoms.length ? localNoms : []);
  const [searchPage, setSearchPage] = useState(1);


  const nominate = (Title, Year, imdbID, Poster) => {
    const nominee = {
      Title,
      Year,
      imdbID,
      Poster
    };
    setNominees([...nominees, nominee]);

    localStorage.setItem(imdbID, JSON.stringify(nominee));

    for (let movie of movies) {
      if (movie.imdbID === imdbID) {
        movie.nominee = true;
        break;
      }
    }
  }

  const remove = (idRemove) => {

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let nom = localStorage[key];
      if (nom.includes(idRemove)) {
        localStorage.removeItem(key);
        break;
      }
    }

    const newNomList = [];
    for (let nominee of nominees) {
      if (nominee.imdbID !== idRemove) {
        newNomList.push(nominee);
      }
    }
    if (movies.length) {
      for (let movie of movies) {
        if (movie.imdbID === idRemove) {
          movie.nominee = false;
          break;
        }
      }
    }
    setNominees(newNomList);
  }

  // get movies from database and set the results to searchResults
  async function getMovies(searchTerm, pageToReturn) {
    // the incoming pageToReturn informs us if the user has triggered a brand new search (even if the search is with the same search text as before)
    if (pageToReturn === 1) {
      setSearchPage(1);
    }
    try {
      // TODO Hide API KEY
      // the API only returns 10 results at a time
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&page=${pageToReturn}&apikey=bbde90f3`);
      let searchResults = response.data.Search;
      // TODO use the result count? total amount of results are known for a search term on the first query
      // const resultCount = response.data.totalResults;

      for (let item of searchResults) {
        // TODO setting nominee causes console error and no results returned sometimes even though there should be results
        if (item) {
          item.nominee = false;
          for (let nominee of nominees) {
            if (item.imdbID === nominee.imdbID) {
              item.nominee = true;
            }
          }
        }
      }
      setLastSearchTerm(searchTerm.replace('*', '').trim());
      if (pageToReturn === 1) {
        // TODO calling getMovies also sets the results in the search area - should getting the results and setting them be seperated as getting results can be used differently 
        setMovies(searchResults);

      } else {
        searchResults = movies.concat(searchResults);
        setMovies(searchResults);
      }
      setNoResults(!searchResults.length);
    } catch (error) {
      // TODO console error if search results not iterable; need message to user that they've reached the end of the results
      console.error(error);
    }
  }


  console.log('APP RENDER')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Awards</h1>
        <img
          className='shoppies-logo'
          src="https://image.freepik.com/free-vector/popcorn-open-clapper-board-movie-reel-3d-glasses-tickets-illustration_185417-5.jpg"
          alt="movie-awards-logo"
        />

        <SearchBar
          getMovies={getMovies}
          setMovies={setMovies}
          searchPage={searchPage}
          setSearchPage={setSearchPage} />


        {nominees.length === 5 ?
          <Banner /> : null}
      </header>

      {nominees.length ?
        <NominationList
          className='nom-container'
          remove={remove}
          nominees={nominees}
        /> :
        <div className='nom-container'>
          Your nominations will appear here.
      </div>}
      {movies.length ?
        <SearchList
          className='search-container'
          nominate={nominate}
          movies={movies}
          maxNomsReached={nominees.length === 5}
          lastSearchTerm={lastSearchTerm}
          getMovies={getMovies}
          handlePageChange={(p) => {
            setSearchPage(p);
          }}
          searchPage={searchPage}
        /> :
        noResults ?
          <div className='search-container'>
            Sorry, we could not find '{lastSearchTerm}'
        </div> :
          <div className='search-container'>
            Search above to find movies!
        </div>}
    </div>
  );
}

export default App;
