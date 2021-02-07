import React from 'react';

export const NominationListItem = (props) => {

  return (
    <>
      <div className='nom-item'>
        <img className='poster' src={(props.poster.includes('jpg')) ? props.poster : 'https://www.kirkstall.com/wp-content/uploads/2020/04/image-not-available-png-8.png'} alt={props.title} />
        <button className='nom-button' onClick={() => { props.remove(props.imdbID) }}>Remove</button>
      </div>
      {/* <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td><img class='poster' src={props.poster}/></td>
        <td><button onClick={() => { props.remove(props.imdbID) }}>Remove</button></td>
      </tr> */}
    </>
  );
};