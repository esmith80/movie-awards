import React from 'react';
import { SearchListItem } from './SearchListItem';


function SearchList(props) {

  const { nominate, movies, maxNomsReached } = props;

  
  // what are we trying return here?
  const searchListItems = [];
  for(let i = 0; i < movies.length; i++) {
    // make an arry of SearchListItems
    if(movies[i]) {
    searchListItems.push(
      <SearchListItem 
      key={i}
      id={movies[i].imdbID}
      title={movies[i].Title}
      year={movies[i].Year}
      nominate={nominate}
      nominee={movies[i].nominee}
      maxNomsReached={maxNomsReached}
      />);    
    }}
    return (
      <div>
      <h2>Search Results</h2>
        <table className='search' >
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {searchListItems}
          </tbody>
        </table>
    </div>
  );
}

export default SearchList;