import React from 'react';

export const SearchListItem = (props) => {
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        {/* @TODO add logic to have either button or 'nominated badge' */}
        <td><button onClick={() => props.nominate(props.title, props.year)}>Nominate</button></td>
      </tr>
    </>
  );
};