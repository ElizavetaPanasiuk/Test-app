import React from 'react';

class TextField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    }
  }
  render(){
    return (
      <div className="text-field">
        {this.state.text}
      </div>
    )
  }
}

export default TextField;