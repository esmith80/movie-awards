import { React, useState } from 'react';
import axios from 'axios';
import SearchBarResultItem from './SearchBarResultItem';


const SearchBarResults = ({ searchText }) => { // will this component automatically re render when searchText is changed?

  const [typeAheadResults, setTypeAheadResults] = useState([]);
  const [searchJustRan, setSearchJustRan] = useState(false);

  // TODO trigger this request and get results before page renders?

  async function getTypeAheadResults(s) {
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
    }
  }
  // TODO adjust this test code which only allows additional search if entire text is deleted
  // search only runs again if the search terms is deleted entirely before something new is
  // TODO need conditions to check 
  // 1) when to run first search 
  // 2) when to rerun search 
  // 3) variable to track if current searchText returns a result
  const searchLengths = [3, 6, 9, 12, 15, 18];
  if (!searchJustRan && searchLengths.indexOf(searchText.length) > -1) {
    getTypeAheadResults(searchText);
    setSearchJustRan(true);
  }

  // debounce: Grouping a sudden burst of events (like keystrokes) into a single one.
  // how would you implment that? how would you group that burst? you track the 


  const results = typeAheadResults.map((title, index) => {
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