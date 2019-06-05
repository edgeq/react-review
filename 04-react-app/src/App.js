import React, {Component} from 'react';
import './App.css'
import art from './balloon.jpeg'
// Styling react follows conventions where each className matches the Component it belongs to.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-h1">This is a react App</h1>
        <img className="App-img" src={art} alt="An Art installation in a hotel lobby" />

      </div>
    )
  }
}

export default App;