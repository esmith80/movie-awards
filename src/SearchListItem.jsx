import React from 'react';

export const SearchListItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        <td><button onClick={() => props.nominate(props.title, props.year)}>Nominate</button></td>
      </tr>
    </>
  );
};