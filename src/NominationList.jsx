import React from 'react';
import { NominationListItem } from './NominationListItem';

function NominationList (props) {

const { remove, nominees } = props;
    
  // how am i maintaining the list of titles and years?
  // if the nominate button is clicked in search results, it needs to take that populate that listItem info in the nominees list
  // work incrementally:
  // -- get a button click to copy info to the nominee table
  // -- does button need to be its own component?
  // -- only then, work on removing from other side 

  // TODO make this list not jump around as things are added? - LOW VALUE not worth effort

  const nomListItems = [];
  for(let i = 0; i < nominees.length; i++) {
    // make an arry of nomListItems
    nomListItems.push(
      <NominationListItem
        key={i}
        imdbID={nominees[i].imdbID}
        title={nominees[i].Title}
        year={nominees[i].Year}
        poster={nominees[i].Poster}
        remove={remove}
      />);    
    }

  return (    
    <div className='nom-container'>
      {nomListItems}
      {/* <table>
      <thead>           
        <tr><th>My Nominations</th></tr>
        <tr>
          <th>Title</th>
          <th>Year</th>
        </tr>
          </thead>
        <tbody>
          {nomListItems}
        </tbody>
      </table>       */}
    </div>
  );
};

export default NominationList;