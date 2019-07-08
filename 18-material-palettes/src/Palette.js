import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    // this.props is coming from App.js import of seedColors.js
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.name}
        // colorId={color.id}
        // paletteId={id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
      />
    ));
    return (
      <div className={classes.Palette}>
        {/* Navbar goes here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer eventually */}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
