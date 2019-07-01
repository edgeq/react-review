import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

class Routes extends Component {
  render() {
    // this function will take advantage of route props
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    const doglist = this.props.dogs;
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Route w/o props</h1>} />
        <Route exact path="/dogs" render={() => <DogList dogs={doglist} />} />
        {/* This route will depend on rout props. getDog() will put those props to work */}
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    );
  }
}

export default Routes;
