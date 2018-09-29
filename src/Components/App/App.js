import React, { Component } from 'react';
// import Box from '../Box/Box';
import BoxSquare from '../BoxSquare/BoxSquare';
import './App.css';

const App = () => {
  const rows = [];
  const numberOfRows = 25;

  for (let i = 0; i < numberOfRows; i++) {
    const uniqueKey=`boxsquare-${i}`;
    rows.push(<BoxSquare key={uniqueKey} boxsquareI={uniqueKey}/>);
  }

  return (
    <div className="App">
      {rows}
    </div>
  );
}


export default App;
