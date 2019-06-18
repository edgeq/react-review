import React, { Component } from "react";
import uuid from 'uuid/v4'

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      color: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // make a new box (use this.props)
    const newBox = {...this.state, id: uuid()}
    this.props.createBox(newBox)
    this.setState({
      width: "",
      height: "",
      color: ""
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }


  // this component should render a form that when submitted, creates a new Box. You should be able to specify the Box’s width, height, and background color. When the form is submitted, clear the input values.
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="background">Background</label>
          <input
            type="text"
            id="background"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </div>

        <button>Add Box</button>
      </form>
    );
  }
}

export default NewBoxForm;
