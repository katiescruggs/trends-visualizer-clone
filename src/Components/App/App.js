import React, { Component } from 'react';
// import Box from '../Box/Box';
import BoxSquare from '../BoxSquare/BoxSquare';
import './App.css';

const App = () => {
  const boxes = [];
  const numberOfBoxes = 25;

  for (let i = 0; i < numberOfBoxes; i++) {
    const uniqueKey=`boxsquare-${i}`;
    boxes.push(<BoxSquare key={uniqueKey} boxsquareI={uniqueKey}/>);
  }

  return (
    <div className="App">
      {boxes}
    </div>
  );
}


export default App;
