import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

function TodoList(props) {
  const todos = props.todos.map(todo => (
    <>
      <Todo
        task={todo.task}
        key={todo.id}
        completed={todo.completed}
        removeTodo={props.removeTodo}
        toggleTodo={props.toggleTodo}
        id={todo.id}
      />
      <Divider />
    </>
  ));

  return (
    <Paper>
      <List>{todos}</List>
    </Paper>
  );
}

export default TodoList;
