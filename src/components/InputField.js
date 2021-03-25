import React from 'react';

class InputField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputText: ''
    }
  }
  render(){
    return(
      <div className="input-field" contentEditable>{this.state.inputText}</div>
    )
  }
}

export default InputField;