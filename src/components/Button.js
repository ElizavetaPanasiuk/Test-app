import React from 'react';

function Button(props){
  return(
    <button onClick={props.clickHandler} className="button">{props.name}</button>
  )
}

export default Button;