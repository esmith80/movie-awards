import { React, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBarResultItem from './SearchBarResultItem';
import removeCharsAndSpaces from './helpers';


function SearchBarResults({ searchText, setSearchText, setShowTypeAhead, getMovies, setInTypeAhead }) { // will this component automatically re render when searchText is changed?

  const [typeAheadResults, setTypeAheadResults] = useState([]);


  async function getTypeAheadResults(s) {
    s = removeCharsAndSpaces(s, ['&', '-']);

    // TODO Hide API KEY
    // the API only returns 10 results at a time
    const response = await axios.get(`https://www.omdbapi.com/?s=${s}*&type=movie&page=1&apikey=bbde90f3`);
    let searchResults = response.data.Search;
    if (searchResults) {
      const titles = [];
      for (const item of searchResults) {
        titles.push(item.Title);
      }
      setTypeAheadResults(titles);
    } else {
      setTypeAheadResults([`no results for "${searchText}"`]);
    }
  };
  let runNewTypeAhead = false;
  let typeAheadTimeOut;

  useEffect(() => {
    const handleTextChange = (s) => {
      runNewTypeAhead = true;
      // debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
      // how would you implment that? how would you group that burst?
      // wait 3 seconds, double check that last search term is different from current search term, then run getTypeAheadResults
      if (typeAheadTimeOut) clearTimeout(typeAheadTimeOut);
      typeAheadTimeOut = setTimeout(() => {
        if (runNewTypeAhead) {
          runNewTypeAhead = false;
          getTypeAheadResults(s);
        }
      }, 200);
      // TODO adjust this test code which only allows additional search if entire text is deleted
      // search only runs again if the search terms is deleted entirely before something new is
      // TODO need conditions to check 
      // 1) when to run first search 
      // 2) when to rerun search 
      // 3) variable to track if current searchText returns a result
    };
    // code to run when the prop searchText changes
    handleTextChange(searchText);
    return () => {
      clearTimeout(typeAheadTimeOut);
    }
    // this will run getTypeAhead with every single keystroke (even backspaces - how do I change this to only run once every few seconds?)
  }, [searchText, typeAheadTimeOut]);

  const results = typeAheadResults.map((title, index) => {
    return (
      <SearchBarResultItem
        key={index}
        title={title}
        setSearchText={setSearchText}
        setInTypeAhead={setInTypeAhead}
        setShowTypeAhead={setShowTypeAhead}
        getMovies={getMovies}
      />
    )
  });


  return (
    <>
    
      <div
        className='searchbar-results'
        onMouseEnter={() => {
          setInTypeAhead(true);
        }}
        onMouseLeave={() => {
          setInTypeAhead(false);
        }}
      >
        <div className="close-control-typeahead"
      onClick={() => {
        setShowTypeAhead(false);
      }}
      >&#10006;</div>
        {results}
      </div>
    </>
  );
};

export default SearchBarResults;