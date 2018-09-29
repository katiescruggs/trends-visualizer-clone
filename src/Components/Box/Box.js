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
      textClasses: '',
      boxClasses: ''
    };
  }

  async componentDidMount() {
    console.log('mounting')
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
      this.setState({ textClasses: 'done-typing' });
      setTimeout(() => this.props.changeBox(), 2000);
    }
  }

  async getNewCard() {
    const colorClass = this.getColorClass();
    const animalName = this.getAnimalName();
    const animalLetters = animalName.split('');
    const animalNameQuery = animalName.split(' ').join('+');

    const boxClasses = this.props.order === 'first' ? this.props.order : `${this.props.order} slide-in`;

    await this.setState({ colorClass, animalLetters, animalNameQuery, displayText: '', boxClasses });

    this.type();
  }

  render() {
    return (
      <div className={`Box ${this.state.colorClass} ${this.state.boxClasses}`}>
        <a 
          className="animal-link" 
          href={`https://www.google.com/search?q=${this.state.animalNameQuery}`} 
          target="_blank"
        >
          <p className={`animal-name ${this.state.textClasses}`}>
            {this.state.displayText}
          </p>
        </a>
      </div>
    )
  }
  
}

export default Box;