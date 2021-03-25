import React from 'react';
import InputField from './InputField';
import TextField from './TextField';

class Button extends React.Component{
  render(){
    return(
      <button className="button" onClick={this.writeText}>
        Write text
      </button>
    )
  }
  writeText(){
    TextField.setState({
      text: `${TextField.state.text} ${InputField.state.inputText}`
    });
    InputField.setState({
      inputText: ''
    });
  }
}

export default Button;