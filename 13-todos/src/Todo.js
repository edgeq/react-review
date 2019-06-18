import React, { Component } from "react";
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    }
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({ isEditing: false});

  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleToggle(evt){
    evt.preventDefault()
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;
    if(this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
            <button>Save</button>
          </form>
        </div>
      )
    } else {
      result = (
        <div>
          <li
            className={this.props.completed ? "done" : ""}
            onClick={this.handleToggle}
            >{this.props.task}
            <button onClick={this.toggleForm} > Edit </button>
            <button onClick={this.props.removeTask}> X </button>
          </li>
        </div>
      )
    }
    return result;
  }
}

export default Todo;
