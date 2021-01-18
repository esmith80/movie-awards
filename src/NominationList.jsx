import React from 'react';
import { NominationListItem } from './NominationListItem';

function NominationList (props) {

const { remove, nominees } = props;   

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
    </div>
  );
};

export default NominationList;