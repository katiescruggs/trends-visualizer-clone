import React, { Component } from 'react';
import Box from '../Box/Box';
import './BoxSquare.css';

class BoxSquare extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      boxes: []
    }
  }

  componentDidMount () {
    const uniqueKey = `${this.props.boxsquareI}-box-${this.state.count}`;
    const newBox = <Box key={uniqueKey} order="first" changeBox={this.changeBox} />
    this.setState({ boxes: [newBox]});
  }

  changeBox = () => {
    const newCount = this.state.count + 1;
    const uniqueKey = `${this.props.boxsquareI}-box-${newCount}`;
    const newBox = <Box key={uniqueKey} order="second" changeBox={this.changeBox}/>

    const newBoxes = [...this.state.boxes, newBox];

    // Limit length of boxes array to 2
    if (newBoxes.length > 2) {
      newBoxes.shift();
    }
    
    this.setState({ boxes: newBoxes, count: newCount });
  }

  render() {
    return (
      <div className="BoxSquare">
        {this.state.boxes}
      </div>
    );
  }
}

export default BoxSquare;