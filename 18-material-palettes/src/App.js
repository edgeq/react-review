import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Page from "./Page";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    // you can add state to the whole app.
    // this.state = { palettes: seedColors };
    this.state = { palettes: savedPalettes || seedColors };
  }

  findPalette = id => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  };
  deletePalette = id => {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  };

  savePalette = newPalette => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  };

  syncLocalStorage() {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
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
            <Page>
              <PaletteList
                palettes={palettes}
                deletePalette={this.deletePalette}
                {...routeProps}
              />
            </Page>
          )}
        />
        <Route
          exact
          path="/palette/new"
          render={rp => (
            <Page>
              <NewPaletteForm
                savePalette={this.savePalette}
                palettes={palettes}
                {...rp}
              />
            </Page>
          )}
        />
        <Route
          exact
          // /:id requires routeProps witch comes with match.params.id
          path="/palette/:id"
          render={routeProps => (
            <Page>
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            </Page>
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <Page>
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId)
                )}
              />
            </Page>
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
