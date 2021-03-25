import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
    };
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.seconsTimerID = setInterval(() => this.tick('seconds'), 1000);
    this.minutesTimerID = setInterval(() => this.tick('minutes'), 60000);
  }

  componentWillUnmount(){
    console.log('compoenntWillUnmount');
    clearInterval(this.secondsTimerID);
    clearInterval(this.minutesTimerID);
  }

  UNSAFE_componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    console.log(nextState);
    console.log(nextProps);
    return this.state.seconds >= 0;
  }

  UNSAFE_componentWillUpdate(prevProps, prevState){
    console.log('componentWillUpdate');
    console.log('preparing for update...');

  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
    console.log('componentDidUpdate');
    console.log(`updated - ${this.state.minutes} : ${this.state.seconds}`);
  }
  
  tick(timeInditificator){
    this.setState({
      [timeInditificator]: (this.state[timeInditificator] + 1) % 60
    })
  }

  toStandardValue(value){
    return value < 10 ? `0${value}` : value;
  }

  render(){
    return(
      <div className="timer">
        <div>Minutes: {this.toStandardValue(this.state.minutes)} </div>
        <div>Seconds: {this.toStandardValue(this.state.seconds)} </div>
      </div>
    )
  }
}

export default Timer;