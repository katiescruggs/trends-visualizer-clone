import React, { Component } from 'react';
import animalNames from '../../animalNames';
import './Box.css';

class Box extends Component {
  constructor() {
    super();
    this.state = {
      animalNameQuery: '',
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
      setTimeout(() => this.getNewCard(), 3000);
    }
  }

  async getNewCard() {
    const colorClass = this.getColorClass();
    const animalName = this.getAnimalName();
    const animalLetters = animalName.split('');
    const animalNameQuery = animalName.split(' ').join('+');

    await this.setState({ colorClass, animalLetters, animalNameQuery, displayText: '' });

    this.type();
  }

  render() {
    return (
      <div className={`Box ${this.state.colorClass}`}>
        <a 
          className="animal-link" 
          href={`https://www.google.com/search?q=${this.state.animalNameQuery}`} 
          target="_blank"
        >
          <p className={`animal-name ${this.state.otherClasses}`}>
            {this.state.displayText}
          </p>
        </a>
      </div>
    )
  }
  
}

export default Box;