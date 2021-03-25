import React from 'react';
import InputField from './components/InputField';
import Button from './components/Button';
import TextField from './components/TextField';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Timer />
        <InputField inputText="" />
        <Button />
        <TextField text="" />
      </div>
    )
  }
}

export default App;