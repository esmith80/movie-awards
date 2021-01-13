import React from 'react';

export const SearchListItem = (props) => {
  return (
    <>
      <li>
        {props.title}, {props.year}
      </li>
    </>
  );
};
