import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
// import uuid from "uuid/v4";

import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  // const testToDos = [
  //   { id: uuid(), task: "get home", completed: false },
  //   { id: uuid(), task: "get board", completed: true },
  //   { id: uuid(), task: "skate proper", completed: false },
  //   { id: uuid(), task: "don't die", completed: false }
  // ];
  const initTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // start state as an array of objects
  const { todos, addTodo, removeTodo, editTodo, toggleTodo } = useTodoState(
    initTodos
  );

  useEffect(() => {
    //sync todos with localstorage;
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Hook Todos</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
