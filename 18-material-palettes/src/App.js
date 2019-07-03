import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id;
    });
  }
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palettes={seedColors}/>} />
        <Route
          exact
          // /:id requires routeProps witch comes with match.params.id
          path="/palette/:id"
          render={ routeProps =>
            <Palette palette={
            generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          }
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
