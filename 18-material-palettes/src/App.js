import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    // you can add state to the whole app.
    this.state = { palettes: seedColors };
  }

  findPalette = id => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  };
  savePalette = newPalette => {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };

  render() {
    // console.log(generatePalette(seedColors[4]));
    const { palettes } = this.state;
    return (
      <Switch>
        {/* pass routeProps so we can be aware of history and dynamically update the current url.
            in this case we will use routeProps in a component's onClick event
        */}
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={rp => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={palettes}
              {...rp}
            />
          )}
        />
        <Route
          exact
          // /:id requires routeProps witch comes with match.params.id
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      // <div className="App">
      //   {/* spread a palette to unpack it's contents as props */}
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
