import React, { Component } from 'react';
import  Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
    <div className="App">
      {/* spread a palette to unpack it's contents as props */}
      <Palette {...seedColors[6]}/>
    </div>
  );
}
}


export default App;
