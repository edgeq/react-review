import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import {withStyles} from '@material-ui/styles';
import "./ColorBox.css";

const styles = {
  //className : { key: value}
  // material-ui wraps these styles as this.props.classes
  ColorBox: {
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    width: "20%",
    margin: "0",
    marginBottom: "-3.5px",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover button": {
      opacity: "1"
    }
  },
  copyText: {
    // styles has access to props (we don't use 'this.props' because we're not in a class)
    // using props, we can dynamically set styles
    color: props => chroma(props.background).luminance() >= 0.54 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.54 ? "rgba(0,0,0,0.6)" : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    bottom: "0px",
    right: "0px",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.6)",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    textDecoration: "none",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    cursor: "pointer",
    border: "none",
    transition: "opacity ease 250ms",
    opacity: "0"
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 600ms ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
    },
    "& p": {
      fontSize: "2.5rem",
      fontWeight: "100"
    }
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 400ms ease-in-out",
    transitionDelay: "300ms",
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    // this.props comes from Palette`
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    // const isDarkColor = chroma(background).luminance() <= 0.08;
    // const isLightColor = chroma(background).luminance() >= 0.54;
    // console.log(isDarkColor);
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          {/* this div starts off hidden */}
          <div
            className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
            style={{ background }}
          />
          <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
            <h1>copied!</h1>
            <p className={classes.copyText}>
              {this.props.background}
            </p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>
              Copy
            </button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={evt => evt.stopPropagation}>
              <span className={classes.seeMore}>
                More
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
