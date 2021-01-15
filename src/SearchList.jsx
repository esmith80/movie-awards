import React from 'react';
import { SearchListItem } from './SearchListItem';


function SearchList(props) {

  const { nominate, movies, maxNomsReached } = props;

  
  // what are we trying return here?
  const searchListItems = [];
  for(let i = 0; i < movies.length; i++) {
    // make an arry of SearchListItems
    searchListItems.push(
      <SearchListItem 
      key={i}
      //@TODO these props sometime error out on searches for 'short circuit' and 'shawshank', tries to run when undefined
      id={movies[i].imdbID}
      title={movies[i].Title}
      year={movies[i].Year}
      nominate={nominate}
      nominee={movies[i].nominee}
      maxNomsReached={maxNomsReached}
      />);    
    }
    // @TODO remove the header (title and year) unless there are search results (or remove it all together??)
    return (
      <div>
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