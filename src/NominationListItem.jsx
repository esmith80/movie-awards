import React from 'react';

export const NominationListItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td><button onClick={() => { props.remove() }}>Remove Nomination</button></td>
      </tr>
    </>
  );
};