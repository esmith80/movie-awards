import { React, useState, useEffect } from 'react';
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
      console.log('regex test worked');
      localNoms.push(nom)
    }
  }

  const [movies, setMovies] = useState({});
  const [noResults, setNoResults] = useState(false);
  const [lastSearchTerm, setLastSearchTerm] = useState('');
  const [nominees, setNominees] = useState(localNoms.length ? localNoms : []);

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
  async function getMovies(searchTerm, pagesToReturn) {
    // TODO add logic to return more than 1 page of results (IS this the right thing to do?) Would a user actually WANT to see more than 50 results?
    const maxPages = 5;
    try {
      // TODO Hide API KEY
      // the API only returns 10 results at a time, so to get more results, I will call it several times (maximum 5 times, set as maxPages)
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=bbde90f3`);
      const totalResults = response.data.totalResults;
      pagesToReturn = (pagesToReturn <= maxPages) ? pagesToReturn : maxPages;
      pagesToReturn = (pagesToReturn <= totalResults) ? pagesToReturn : totalResults;

      let movies = [];
      for (let page = 1; page <= pagesToReturn; page++) {
        const currentMovies = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&type=movie&page=${page}&apikey=bbde90f3`);
        movies = movies.concat(currentMovies.data.Search);
      }
      for (let movie of movies) {
        // TODO setting nominee causes console error and no results returned sometimes even though there should be results
        if (movie) {
          movie.nominee = false;
          for (let nominee of nominees) {
            if (movie.imdbID === nominee.imdbID) {
              movie.nominee = true;
            }
          }
        }
      }
      setMovies(movies);
      setLastSearchTerm(searchTerm.replace('*', '').trim());
      setNoResults(!movies.length);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shoppies</h1>
        <img
          className='shoppies-logo'
          src="https://cdn0.iconfinder.com/data/icons/social-line-transparent/50/Shopify-line-transparent-512.png"
          alt="shoppies-logo"
        />

        <SearchBar getMovies={getMovies} />
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
