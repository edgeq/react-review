import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div className={this.props.status}>
        <li>{this.props.task}
          <button > Edit </button>
          <button onClick={this.props.removeTask}> X </button>
        </li>
      </div>
    )
  }
}

export default Todo;
