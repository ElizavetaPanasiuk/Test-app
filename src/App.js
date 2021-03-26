import React from 'react';
import Textarea from './components/Textarea';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Textarea />
      </div>
    )
  }
}

export default App;