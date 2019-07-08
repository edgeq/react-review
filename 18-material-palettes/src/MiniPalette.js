import React from "react";
import { withStyles } from "@material-ui/styles";
// styles is an object comprised of classNames
import styles from './styles/MiniPaletteStyles';


function MiniPalette(props) {
  // we use props because we're in a functional component and NOT a class.
  // styles will be packaged inside of { classes } on export
  // { classes } is extracted from withStyles.
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div style={{ backgroundColor: color.color}} className={classes.miniColor} key={color.name} />
  ))

  return (
    // the onClick event uses method props passed from PaletteList
    <div className={classes.root} onClick={ props.paletteLink }>
      <div className={classes.clrDivs}> { miniColorBoxes } </div>
      <h5 className={classes.title} aria-label={paletteName}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

// Component Inception:
// this is a higher order component that exports a modified component with styles
// withStyles passes in the styles object as {classes} and attaches them to the MiniPalette component
export default withStyles(styles)(MiniPalette);
