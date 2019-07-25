import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
// styles is an object comprised of classNames
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    this.deletePaletteDialog = this.deletePaletteDialog.bind(this);
  }

  deletePaletteDialog(e) {
    //stopPropagation is React way of handling event delegation
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, paletteName, paletteLink, emoji, colors } = this.props;
    const miniColorBoxes = colors.map(color => (
      <div
        style={{ backgroundColor: color.color }}
        className={classes.miniColor}
        key={color.name}
      />
    ));

    return (
      // the onClick event uses method props passed from PaletteList
      <div className={classes.root} onClick={paletteLink}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePaletteDialog}
        />

        <div className={classes.clrDivs}> {miniColorBoxes} </div>
        <h5 className={classes.title} aria-label={paletteName}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

// Component Inception:
// this is a higher order component that exports a modified component with styles
// withStyles passes in the styles object as {classes} and attaches them to the MiniPalette component
export default withStyles(styles)(MiniPalette);
