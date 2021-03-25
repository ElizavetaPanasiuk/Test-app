import React from 'react';
/* import Timer from './components/Timer'; */
import Textarea from './components/Textarea';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <div className="app">
 {/*        <Timer /> */}
        <Textarea />
      </div>
    )
  }
}

export default App;