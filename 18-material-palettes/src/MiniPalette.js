import React from 'react';
import { withStyles } from '@material-ui/styles';

// styles is an object comprised of classNames
const styles = {
  // each className is an onject with properties
  main: {
    backgroundColor: "purple",
    border: "3px solid teal"
  },
  secondary: {
    backgroundColor: "pink"
  }
};

function MiniPalette(props) {
  // we use props because we're in a functional component and NOT a class.
  // ...styles will be packaged inside of { classes } on export
  // { classes } is extracted from withStyles.
  const { classes } = props;
  console.log(classes);

  return (
    <div className={classes.main}>
      <h3>Mini Palette</h3>
      <section className={classes.secondary}>lajnsd ;alsdn l;kmn </section>
    </div>
  )
}

// Component Inception:
// this is a higher order component that exports a modified component with styles
// withStyles passes in the styles object as {classes} and attaches them to the MiniPalette component
export default withStyles(styles)(MiniPalette);