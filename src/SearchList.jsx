import React from 'react';
import getMovies from './helpers';

const searchList = "hello";
// const searchList = getMovies('guard', 1).then(s => s);

function SearchList(props) {
  return (
    <div>
      <h1>SEARCH LIST</h1>
      <p>{searchList}</p>
    </div>
  );
}

export default SearchList;