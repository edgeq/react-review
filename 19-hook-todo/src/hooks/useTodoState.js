import { useState } from "react";
import uuid from "uuid/v4";

export default initTodos => {
  const [todos, setTodos] = useState(initTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      //filter out a removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      // map through todos
      const updatedTodos = todos.map(todo =>
        //update the specified id.
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    }
  };
};
