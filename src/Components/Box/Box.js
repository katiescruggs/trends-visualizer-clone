import React, { Component } from 'react';
import animalNames from '../../animalNames';
import './Box.css';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      animalName: '',
      colorClass: '',
      displayText: ''
    };
  }

  componentDidMount() {
    const colorClass = this.getColorClass();
    this.setState({ colorClass });

    const animalName = this.getAnimalName();
    this.setState({ animalName });
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  getColorClass() {
    const colorNumber = this.getRandomNumber(1, 4);
    return `color${colorNumber}`;
  }

  getAnimalName() {
    const animalIndex = this.getRandomNumber(0, animalNames.length - 1);
    return animalNames[animalIndex];
  }

  render() {
    return (
      <div className={`Box ${this.state.colorClass}`}>
        <p className="animal-name">{this.state.animalName}</p>
      </div>
    )
  }
  
}

export default Box;