import React from "react";
import Summary from "./Summary";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import ArchivedTodoListContainer from "./ArchivedTodoListContainer";
import { archiveTodo } from "./todoActions";
import { useDispatch } from 'react-redux'

import {themes} from './themeContext';

import "./app.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (id, description) => {
    const newTodos = [...todos, { id, description, completed: false }];
    setTodos(newTodos);
   };

  const dispatch = useDispatch();

  const removeTodo = id => {
  	dispatch(archiveTodo(todos.filter(t => t.id === id)[0].description));
    setTodos(todos => todos.filter(t => t.id !== id));
  };

  return (
	  <div className="app">
	    <h1>My Todo App</h1>
	    <Summary todosCount={5} completedTodosCount={3} />
	    <AddTodo addTodo={addTodo} todos={todos}/>
	    <TodoList
				theme={themes.light}
				todoItems={todos}
				removeTodo={removeTodo}
	    />
	    <ArchivedTodoListContainer
	    	theme={themes.light}
	    	removeTodo={()=>{}}
    	/>
	  </div>
  )
};

export default App;
