import React from 'react';
import { SearchListItem } from './SearchListItem';


function SearchList(props) {

  const { movieTitles, movieYears, nominate } = props;
  
  // what are we trying return here?
  const searchListItems = [];
  for(let i = 0; i < movieTitles.length; i++) {
    // make an arry of SearchListItems
    searchListItems.push(
      <SearchListItem 
      key={i}
      title={movieTitles[i]}
      year={movieYears[i]}
      nominate={nominate}
      />);    
    }
    
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