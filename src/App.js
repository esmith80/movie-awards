import { React, useState } from 'react';
import './App.css';
import SearchList from './SearchList';
import NominationList from './NominationList';
import SearchBar from './SearchBar';
const axios = require('axios');



function App() {
  // @TODO even though this version of state managment is working, I want to see if I can use objects to make things more concise
  // create state for search results list
  const [movies, setMovies] = useState({});
  
  // create state for nominees list
  const [nominees, setNominees] = useState([]);
  
  const nominate = (Title, Year, imdbID) => {
    // copy/move info from the search results to nominees table

    // @TODO validation to prevent adding same movie twice (either disable button or remove from the search list altogether)    
    // could make an animation so button goes to a CHECKMARK icon that says "nominated" or an icon that looks like an award statue
    // toggle that is used between search and noms
    const nominee = {
      Title,
      Year,
      imdbID
    };
    console.log(nominee);
    setNominees([...nominees, nominee]);
    
  }

  const remove = () => {
    // @TODO remove logic for noms and search list
    console.log('remove was invoked');
  }
      
  // get movies from database and set the results to searchResults
  async function getMovies(searchTerm, pagesToReturn) {
    // TODO add logic to return more than 1 page of results (IS this the right thing to do?)
    // TODO add message when no results are returned that says 'no results with the search text 'dkfjdfdf''
    // TODO add logic in search that either doesn't show a result already added to nominations OR returns it with a toggle that says 'nominated'
    const maxPages = 5;
    try {
      // get the number of returned results first so we can see how many pages we can break it into
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=bbde90f3`);
      const totalResults = response.data.totalResults;
      pagesToReturn = (pagesToReturn <= maxPages) ? pagesToReturn : maxPages;
      pagesToReturn = (pagesToReturn <= totalResults) ? pagesToReturn : totalResults;
      
      let movies = [];
      for (let page = 1; page <= pagesToReturn; page++) {
        const currentMovies = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&page=${page}&apikey=bbde90f3`);
        movies = movies.concat(currentMovies.data.Search);
      }
      setMovies(movies);
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
          nominate={nominate}
          movies={movies}
        />
        <NominationList
          remove={remove}
          nominees={nominees}
        />
        
      </header>
    </div>
  );
}



export default App;
