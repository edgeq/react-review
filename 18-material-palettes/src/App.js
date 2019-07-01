import React from 'react';
import  Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      {/* spread a palette to unpack it's contents as props */}
      <Palette {...seedColors[6]}/>
    </div>
  );
}

export default App;
