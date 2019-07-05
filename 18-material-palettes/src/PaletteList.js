import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: "teal",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    border: "1px solid white"
    
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
}

class PaletteList extends Component {
  goToPalette(id){
    // history.push comes from App.js and is used to update the current url. 
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes, palettes } = this.props;


    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Material Palettes</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => (
              // Each MiniPalette should link to it's corresponding palette
              // <Link to={`palette/${palette.id}`}> - we don't want to do this because of inherited <a> styling.
              // Instead, we want to use the history routeProp to dynamically update (push to) the current URL on each MiniPalette
                <MiniPalette {...palette} paletteLink={() => this.goToPalette(palette.id)}/>
              // </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
