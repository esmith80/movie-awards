import React from 'react';


export const SearchListItem = (props) => {
  
  // const [buttonText, setButtonText] = useState('Nominate');
  
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        {/* @TODO add logic to have either button or 'nominated badge' */}
        <td>
          <button 
            onClick={() => {
              // setButtonText('🏆' );
              props.nominate(props.title, props.year, props.id);
            }}
            // TODO once it is set to true, it stays disabled even after you
            disabled={props.nominee || props.maxNomsReached}>{props.nominee ? '🏆' : 'Nominate'}
           </button>
          </td>
      </tr>
    </>
  );
};