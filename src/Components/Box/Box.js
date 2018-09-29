import React, { Component } from 'react';
import animalNames from '../../animalNames';
import './Box.css';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      animalLetters: [],
      colorClass: '',
      displayText: '',
      otherClasses: ''
    };
  }

  async componentDidMount() {
    this.getNewCard();
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
  }

  getColorClass() {
    const colorNumber = this.getRandomNumber(1, 4);
    return `color${colorNumber}`;
  }

  getAnimalName() {
    const animalIndex = this.getRandomNumber(0, animalNames.length);
    return animalNames[animalIndex];
  }

  type() {
    const nextLetter = this.state.animalLetters.shift();
    const newDisplayText = this.state.displayText + nextLetter;
    this.setState({ displayText: newDisplayText });

    if (this.state.animalLetters.length) {
      setTimeout(() => this.type(), 300);
    } else {
      this.setState({ otherClasses: 'done-typing' });
      // this.props.changeCards();
      setTimeout(() => this.getNewCard(), 3000);
    }
  }

  async getNewCard() {
    const colorClass = this.getColorClass();
    const animalLetters = this.getAnimalName().split('');

    await this.setState({ colorClass, animalLetters, displayText: '' });

    this.type();
  }

  render() {
    return (
      <div className={`Box ${this.state.colorClass}`}>
        <p className={`animal-name ${this.state.otherClasses}`}>
          {this.state.displayText}
        </p>
      </div>
    )
  }
  
}

export default Box;