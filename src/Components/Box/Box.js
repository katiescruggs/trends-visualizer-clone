import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      animalName: '',
      colorClass: ''
    };
  }

  componentDidMount() {
    const colorNumber = this.getRandomNumber(1, 4);
    this.setState({colorClass: `color${colorNumber}`});
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  render() {
    return (
      <div className={`Box ${this.state.colorClass}`}>
      </div>
    )
  }
  
}

export default Box;