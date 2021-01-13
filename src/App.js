import { React, useState } from 'react';
import './App.css';
import SearchList from './SearchList';
import NominationList from './NominationList';
import SearchBar from './SearchBar';
const axios = require('axios');



function App() {
  // @TODO even though this version of state managment is working, I want to see if I can use objects to make things more concise
  // create state for search results list
  const [movieTitles, setMovieTitles] = useState([]);
  const [movieYears, setMovieYears] = useState([]);
  
  // create state for nomination list
  const [nomTitles, setNomTitles] = useState([]);
  const [nomYears, setNomYears] = useState([]);
  
  const nominate = (title, year) => {
    // copy/move info from the search results to nominees table

    // @TODO validation to prevent adding same movie twice (either disable button or remove from the search list altogether)    
    // could make an animation so button goes to a CHECKMARK icon that says "nominated" or an icon that looks like an award statue
    // toggle that is used between search and noms
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
    // TODO add message when no results are returned that says 'no results with the search text 'dkfjdfdf''
    // TODO add logic in search that either doesn't show a result already added to nominations OR returns it with a toggle that says 'nominated'
    const maxPages = 1;
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=bbde90f3`);
      const totalResults = response.data.totalResults;
      pagesToReturn = (pagesToReturn <= maxPages) ? pagesToReturn : maxPages;
      pagesToReturn = (pagesToReturn <= totalResults) ? pagesToReturn : totalResults;

      let movies = [];
      for (let page = 1; page <= pagesToReturn; page++) {
        const currentMovies = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&page=${page}&apikey=bbde90f3`);
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
        <SearchBar
          getMovies={getMovies}
        />
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
