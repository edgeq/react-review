import React from "react";
import { withStyles } from "@material-ui/styles";

// styles is an object comprised of classNames
const styles = {
  // each className is an onject with properties
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
  colors: {
    backgroundColor: "grey"
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
  }
};

function MiniPalette(props) {
  // we use props because we're in a functional component and NOT a class.
  // ...styles will be packaged inside of { classes } on export
  // { classes } is extracted from withStyles.
  const { classes, paletteName, emoji } = props;
  console.log(classes);

  return (
    <div className={classes.root}>
      <div classname={classes.colors} />
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
