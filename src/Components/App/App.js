import React, { Component } from 'react';
// import Box from '../Box/Box';
import BoxSquare from '../BoxSquare/BoxSquare';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [],
      numberOfBoxes: 25
    }
  }
  
  componentDidMount() {
    this.createBoxes();
  }

  createBoxes = () => {
    const boxes = [];

    for (let i = 0; i < this.state.numberOfBoxes; i++) {
      const uniqueKey = `boxsquare-${i}`;
      boxes.push(<BoxSquare key={uniqueKey} boxsquareI={uniqueKey} />);
    }

    this.setState({ boxes });
  }

  handleInputChange = async (event) => {
    const { name, value } = event.target;
    const numberOfBoxes = parseInt(value, 10);

    if (numberOfBoxes !== this.state.numberOfBoxes) {
      await this.setState({ [name]: numberOfBoxes });
      this.createBoxes();
    }
  }

  render() {
    return (
      <div className="App">
        <select className="grid-size-select" name="numberOfBoxes" onChange={this.handleInputChange}>
          <option selected disabled>select a grid size</option>
          <option value="25">5 x 5</option>
          <option value="16">4 x 4</option>
          <option value="9">3 x 3</option>
          <option value="4">2 x 2</option>
          <option value="1">1 x 1</option>
        </select>
        <div className={`box-container numberOfBoxes${this.state.numberOfBoxes}`}>
          {this.state.boxes}
        </div>
      </div>
    );
  }
}


export default App;
