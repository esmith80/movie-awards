import { React, useState } from 'react';
import axios from 'axios';
import SearchBarResultItem from './SearchBarResultItem';


const SearchBarResults = ({ searchText }) => {

  const [thResults, setThResults] = useState([]);
  // TODO trigger this request and get results before page renders?

  const titles = [];
  async function getTypeAheadResults() {
    // TODO Hide API KEY
    // the API only returns 10 results at a time
    const response = await axios.get(`https://www.omdbapi.com/?s=star&type=movie&page=1&apikey=bbde90f3`);
    let searchResults = response.data.Search;
    console.log(searchResults[0].Title)
    for (const item of searchResults) {
      titles.push(item.Title);
    }

  }


  const results = titles.map((title, index) => {
    return (
      <SearchBarResultItem
        key={index}
        title={title} />
    )
  });

  return (
    <div className='searchbar-results' >
      {results}
    </div>
  );
};

export default SearchBarResults;