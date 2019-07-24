import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";

class PaletteList extends Component {
  goToPalette(id) {
    // history.push comes from App.js and is used to update the current url.
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { classes, palettes, deletePalette } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Material Palettes</h1>
            <Link to="/palette/new">Create new palette</Link>
          </nav>

          <TransitionGroup className={classes.palettes}>
            {palettes.map(palette => (
              // Each MiniPalette should link to it's corresponding palette
              // <Link to={`palette/${palette.id}`}> - we don't want to do this because of inherited <a> styling.
              // Instead, we want to use the history routeProp to dynamically update (push to) the current URL on each MiniPalette
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  paletteLink={() => this.goToPalette(palette.id)}
                  deletePalette={deletePalette}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
              // </Link>
            ))}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
