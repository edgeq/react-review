import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {withStyles} from '@material-ui/styles';
// import "./ColorBox.css"; - we no longer point to css files since we're importing JSS styles from the styles folder
// withStyles wraps all key:value pairs from ColorBoxStyles as this.props.classes
import styles from './styles/ColorBoxStyles';


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
