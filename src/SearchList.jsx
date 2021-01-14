import React from 'react';
import { SearchListItem } from './SearchListItem';


function SearchList(props) {

  const { nominate, movies } = props;

  
  // what are we trying return here?
  const searchListItems = [];
  for(let i = 0; i < movies.length; i++) {
    // make an arry of SearchListItems
    searchListItems.push(
      <SearchListItem 
      key={i}
      id={movies[i].imdbID}
      title={movies[i].Title}
      year={movies[i].Year}
      nominate={nominate}
      />);    
    }
    // @TODO remove the header (title and year) unless there are search results (or remove it all together??)
    return (
      <div>
        <h1>SEARCH RESULTS</h1>
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