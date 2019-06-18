import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import uuid from "uuid/v4";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // { task: "do something", status: "incomplete", id: uuid() },
        // { task: "do something else", status: "incomplete", id: uuid() }
      ]
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask(todo) {
    let newTodo = { ...todo, id: uuid() };
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== id)
    });
  }

  render() {
    const todos = this.state.todos.map(item => (
      <Todo
        task={item.task}
        status={item.status}
        id={item.id}
        key={item.id}
        removeTask={() => this.remove(item.id)}
        />
    ));

    return (
      <div>
        <h1>ToDo List</h1>
        <ul>
          {todos}
        </ul>
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
