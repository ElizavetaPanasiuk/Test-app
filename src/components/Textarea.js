import React from 'react';
import Button from './Button';

class Textarea extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      outputText: '',
      inputText: '',
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearOutput = this.clearOutput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  componentDidMount(){
    this.setState({
      outputText: localStorage.getItem('outputText') || '',
      inputText: localStorage.getItem('inputText') || '',
    })
  }
  
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    console.log(nextProps);
    console.log(this.props);
    console.log('-'.repeat(30));
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    console.log('previous');
    console.log(this.props);
    console.log(this.state);
    console.log('next');
    console.log(nextProps);
    console.log(nextState);
    console.log('-'.repeat(30));
    return true;
  }

  UNSAFE_componentWillUpdate(prevProps, prevState){
    console.log('componentWillUpdate');
    console.log('previous');
    console.log(prevProps);
    console.log(prevState);
    console.log('next');
    console.log(this.props);
    console.log(this.state);
    console.log('-'.repeat(30));
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('componentDidUpdate');
    console.log('previous');
    console.log(prevProps);
    console.log(prevState);
    console.log('next');
    console.log(this.props);
    console.log(this.state);
    console.log('-'.repeat(30));
  }

  handleClick(){
    const newOutput = `${this.state.outputText} ${this.state.inputText}`;
    this.setState({
      outputText: newOutput,
    })
    localStorage.setItem('outputText', newOutput);
    this.clearInput();
  }

  handleChange(){
    const currentInput = document.querySelector('input').value; // !!! document.querySelector('input').value - Can I use it in React?
    this.setState({
      inputText: currentInput 
    })
    localStorage.setItem('inputText', currentInput);
  }

  clearOutput(){
    this.setState({
      outputText: ''
    })
    localStorage.setItem('outputText', '');
  }

  clearInput(){
    this.setState({
      inputText: ''
    })
    localStorage.setItem('inputText', '');
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.inputText} onChange={this.handleChange} className="input-field"/>
        <div className="buttons">
          <Button clickHandler={this.handleClick} name="Write text"/>
          <Button clickHandler={this.clearOutput} name="Clear ouput" />
          <Button clickHandler={this.clearInput} name="Clear input" />
        </div>
        <div className="text-field">{this.state.outputText}</div>
      </div>
    );
  }
}

export default Textarea;