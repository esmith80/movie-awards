import React from 'react';

export const SearchListItem = ({ id, nominate, nominee, maxNomsReached, poster, title, year }) => {

  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{year}</td>
        <td>
          <button
            onClick={() => {
              nominate(title, year, id, poster);
            }}
            disabled={nominee || maxNomsReached}>{nominee ? '🏆' : 'Nominate'}
          </button>
        </td>
      </tr>
    </>
  );
};