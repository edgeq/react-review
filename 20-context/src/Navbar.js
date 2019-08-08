import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
  withStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { ThemeContext } from "./contexts/ThemeContext";
import { withLanguageContext } from "./contexts/LanguageContext";

import styles from "./styles/NavbarStyles";

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  french: {
    search: "Chercher",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
};

class Navbar extends Component {
  //tells component to look up the component tree for a context
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-label="country-flag">
                {flag}
              </span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title - {language}
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder={`${search}...`}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
