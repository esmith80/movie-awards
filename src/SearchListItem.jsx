import { React, useState } from 'react';


export const SearchListItem = (props) => {
  
  const [toggle, setToggle] = useState(false);
  const [buttonText, setButtonText] = useState('Nominate');
  
  return (
    <>
      <tr>
        <td>{props.title}</td>
        <td>{props.year}</td>
        {/* @TODO add logic to have either button or 'nominated badge' */}
        <td>
          <button 
            onClick={() => {
              setToggle(!toggle);
              setButtonText('🏆' );
              props.nominate(props.title, props.year, props.id);
              }}
            disabled={toggle}>{buttonText}
           </button>
          </td>
      </tr>
    </>
  );
};