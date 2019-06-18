import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.addTask(this.state);
    this.setState({task: ""})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              placeholder="tasks go here"
              id="task"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Add Todo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
