import React from 'react';

class Button extends React.Component{
  render(){
    return(
      <button className="button" onClick={this.writeText}>
        Write text
      </button>
    )
  }
  writeText(){
    const INPUTFIELD= document.querySelector('.input-field');
    document.querySelector('.text-field').textContent = INPUTFIELD.value;
    INPUTFIELD.value = '';
  }
}

export default Button;