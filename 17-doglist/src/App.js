import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import DogList from "./DogList";
import whiskey from "./imgs/whiskey.jpg";
import tubby from "./imgs/tubby.jpg";
import hazel from "./imgs/hazel.jpg";
import DogDetails from "./DogDetails";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
          "Whiske's parents are alcoholics"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
          "Hazel has hazel eyes"
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  };
  render() {
    // this function will take advantage of route props
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    }
    const doglist = this.props.dogs;
    return (
      <div className="App">
      <Navbar dogs={this.props.dogs}/>
      <Switch>
        <Route exact path="/" render={() => <h1>Route w/o props</h1>} />
        <Route exact path="/dogs" render={() => <DogList dogs={doglist} />} />
        {/* This route will depend on rout props. getDog() will put those props to work */}
        <Route exact path="/dogs/:name" render={getDog} />
      </Switch>
      </div>
    );
  }
}

export default App;
