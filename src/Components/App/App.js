import React, { Component } from 'react';
// import Box from '../Box/Box';
import BoxSquare from '../BoxSquare/BoxSquare';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      boxes: [],
      numberOfBoxes: 25,
      defaultGridSize: true,
      gridSize: 5
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

  handleSelectChange = async (event) => {
    if (event.target.value === 'default') {
      if (!this.state.defaultGridSize) {
        await this.setState({ defaultGridSize: true })
      }
    } else {
      const gridSize = parseInt(event.target.value, 10);

      if (gridSize !== this.state.gridSize || this.state.defaultGridSize) {
        await this.setState({ defaultGridSize: false, gridSize });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <select defaultValue="default" className="grid-size-select" name="gridSize" onChange={this.handleSelectChange}>
          <option value="default">default grid size</option>
          <option value="5">5 x 5</option>
          <option value="4">4 x 4</option>
          <option value="3">3 x 3</option>
          <option value="2">2 x 2</option>
          <option value="1">1 x 1</option>
        </select>
        <div className={`box-container gridSize${this.state.defaultGridSize || this.state.gridSize}`}>
          {this.state.boxes}
        </div>
      </div>
    );
  }
}


export default App;
