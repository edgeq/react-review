import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
    console.log(level);
  }
  render() {
    // this.props is coming from App.js import of seedColors.js
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} key={color.name}/>
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar level={level} changeLevel={this.changeLevel}/>
        <div className="Palette-colors">
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* footer eventually */}
      </div>
    );
  }
}

export default Palette;
