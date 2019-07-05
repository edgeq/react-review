import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    // we need to call a method that loops through each palatte's color
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shades);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    //return all shades of given color - I don't really understand this loop
    for (let key in allColors) {
      // combine shades with allColors array
      shades = shades.concat(
        // make a new array from where color.id is the same as the 2nd argument in this function
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>A Single Color Palette Will Go Here</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
