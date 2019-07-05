import React from "react";
import { withStyles } from "@material-ui/styles";

// styles is an object comprised of classNames
const styles = {
  // each className is an object with properties
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover" : {
      cursor: "pointer"
    }
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  clrDivs: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"  
  }
};

function MiniPalette(props) {
  // we use props because we're in a functional component and NOT a class.
  // styles will be packaged inside of { classes } on export
  // { classes } is extracted from withStyles.
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(color => (
    <div style={{ backgroundColor: color.color}} className={classes.miniColor} key={color.name} />
  ))

  return (
    <div className={classes.root}>
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
