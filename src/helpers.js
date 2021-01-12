// helpers file that will do api calls and feed data to components as needed

// dependencies

const axios = require('axios');

// get movie data returns a data object that contains a Search array of objects (up to 10 objects)
// I have used the 'page' param to return more than 10 results

export default async function getMovies (searchTerm, pagesToReturn) {
  // TODO add logic to return more than 1 page of results (IS this the right thing to do?)
  const maxPages = 1;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=bbde90f3`);
    const totalResults = response.data.totalResults;
    pagesToReturn = (pagesToReturn <= maxPages) ? pagesToReturn : maxPages;
    pagesToReturn = (pagesToReturn <= totalResults) ? pagesToReturn : totalResults;    

    let movies = [];
    for(let page = 1; page <= pagesToReturn; page++) {
      const currentMovies = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&page=${page}&apikey=bbde90f3`);
      movies = movies.concat(currentMovies.data.Search);
    }
    return movies;
  } catch (error) {
    console.error(error);
  }
}
// add movie to search result list


// add movie to nomination list


// delete movie from nomination list