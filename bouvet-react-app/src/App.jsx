import React from "react";
import Summary from "./Summary";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import ArchivedTodoListContainer from "./ArchivedTodoListContainer";
import { archiveTodoAction } from "./todoActions";
import { useDispatch } from 'react-redux'

import "./app.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const dispatch = useDispatch();

  const addTodo = (id, description) => {
    const newTodos = [...todos, { id, description, completed: false }];
    setTodos(newTodos);
   };

  const removeTodo = id => {
    setTodos(todos => todos.filter(t => t.id !== id));
  };

  const archiveTodo = id => {
  	dispatch(archiveTodoAction(todos.filter(t => t.id === id)[0].description));
    setTodos(todos => todos.filter(t => t.id !== id));
  };

  return (
	  <div className="app">
	    <h1>My Todo App</h1>
	    <Summary todosCount={5} completedTodosCount={3} />
	    <AddTodo addTodo={addTodo} todos={todos}/>
	    <TodoList
				todoItems={todos}
				removeTodo={removeTodo}
				archiveTodo={archiveTodo}
	    />
	    <ArchivedTodoListContainer
			  removeTodo={removeTodo}
			/>
	  </div>
  )
};

export default App;
