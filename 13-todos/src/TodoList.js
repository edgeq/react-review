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
    this.update = this.update.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  addTask(todo) {
    let newTodo = { ...todo, id: uuid(), completed: false };
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter(task => task.id !== id)
    });
  }

  update(id, newTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, task: newTask}
      }
      return todo
    })
    this.setState({todos: updatedTodos});
  }

  toggleDone(id){
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    this.setState({todos: updatedTodos});
  }

  render() {
    const todos = this.state.todos.map(item => (
      <Todo
        task={item.task}
        completed={item.completed}
        id={item.id}
        key={item.id}
        removeTask={() => this.remove(item.id)}
        updateTask={this.update}
        toggleTodo={this.toggleDone}
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
