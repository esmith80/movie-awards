import { React, useState } from 'react';
import './App.css';
import SearchList from './SearchList';
import NominationList from './NominationList';
const axios = require('axios');



function App() {
  // create state for search results list
  const [movieTitles, setMovieTitles] = useState([]);
  const [movieYears, setMovieYears] = useState([]);
  
  // create state for nomination list
  const [nomTitles, setNomTitles] = useState([]);
  const [nomYears, setNomYears] = useState([]);
  
  const nominate = (title, year) => {
    // copy/move info from the search results to nominees table

    // @TODO validation to prevent adding same movie twice (either disable button or remove from the search list altogether)    
    setNomTitles([...nomTitles, title]);
    setNomYears([...nomYears, year]);
    
  }

  const remove = () => {
    // @TODO remove logic for noms and search list
    console.log('remove was invoked');
    // setNomTitles(...nomTitles);
    // setNomYears(...nomYears);
  }
      
  // get movies from database and set the results to searchResults
  async function getMovies(searchTerm, pagesToReturn) {
    // TODO add logic to return more than 1 page of results (IS this the right thing to do?)
    const maxPages = 1;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=bbde90f3`);
      const totalResults = response.data.totalResults;
      pagesToReturn = (pagesToReturn <= maxPages) ? pagesToReturn : maxPages;
      pagesToReturn = (pagesToReturn <= totalResults) ? pagesToReturn : totalResults;

      let movies = [];
      for (let page = 1; page <= pagesToReturn; page++) {
        const currentMovies = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=bbde90f3`);
        movies = movies.concat(currentMovies.data.Search);
      }
      const titles = [];
      const years = [];
      for (let movie of movies) {
        //@TODO trim titles and years for odd characters (some years have a dash in them) use regex to trim to 4 digit years; trim titles for whitespace
        titles.push(movie.Title);
        years.push(movie.Year);
      }
      setMovieTitles(titles);
      setMovieYears(years);

    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => { getMovies('guard', 3)} }>Search for 'guard'</button>        
        <SearchList
          movieTitles={movieTitles}
          movieYears={movieYears}
          nominate={nominate}
        />
        <NominationList
          nomTitles={nomTitles}
          nomYears={nomYears}
          remove={remove}            
        />
      </header>
    </div>
  );
}



export default App;
