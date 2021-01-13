import { React, useState } from 'react';
import { SearchListItem } from './SearchListItem';

const axios = require('axios');

function SearchList() {
  // create state for search results list
  const [movieTitles, setMovieTitles] = useState([]);
  const [movieYears, setMovieYears] = useState([]);

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

  getMovies('guard', 3);

  // what are we trying return here?
  const searchListItems = [];
  for(let i = 0; i < movieTitles.length; i++) {
    // make an arry of SearchListItems
    searchListItems.push(
      <SearchListItem 
        title={movieTitles[i]}
        year={movieYears[i]} 
      />);    
  }

  return (
    <div>
      <h1>SEARCH RESULTS</h1>
      <ul>
        {searchListItems}
      </ul>
    </div>
  );
}

export default SearchList;