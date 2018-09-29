import React, { Component } from 'react';
import Box from '../Box/Box';
import './App.css';

const App = () => {
  const rows = [];
  const numberOfRows = 25;

  for (let i = 0; i < numberOfRows; i++) {
    rows.push(<Box />);
  }

  return (
    <div className="App">
      {rows}
    </div>
  );
}


export default App;
