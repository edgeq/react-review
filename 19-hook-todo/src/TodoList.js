import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";

function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
