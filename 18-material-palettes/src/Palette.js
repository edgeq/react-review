import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }

  changeFormat(val){
    this.setState({format: val});
  }
  render() {
    // this.props is coming from App.js import of seedColors.js
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.name}/>
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer eventually */}
        <footer className="Palette-footer">
          { paletteName }
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;