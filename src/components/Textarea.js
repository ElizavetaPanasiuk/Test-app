import React from 'react';
import Button from './Button';
import {connect} from 'react-redux';

class Textarea extends React.Component{
  render(){
    return(
      <div>
        <input type="text" value={this.props.inputText} onChange={e => e.target.value} className="input-field"/>
        <div className="buttons">
          <Button clickHandler="this.props.writeText" name="Write text"/>
          <Button clickHandler="this.props.clearOutput" name="Clear ouput" />
          <Button clickHandler="this.props.clearInput" name="Clear input" />
        </div>
        <div className="text-field">{this.props.outputText}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    inputText: state.inputText,
    outputText: state.outputText,
  }
} 

function mapDispatchToProps(dispatch){
  return{
    writeText: () => dispatch({type: 'WRITE_TEXT'}),
    clearOutput: () => dispatch({type: 'CLEAR_OUTPUT'}),
    clearInput: () => dispatch({type: 'CLEAR_INPUT'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Textarea);