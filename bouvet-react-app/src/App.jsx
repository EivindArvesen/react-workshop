import React from "react";

import Summary from "./Summary";
import TodoList from "./TodoList";

import "./app.css";

const App = () => (
  <div className="app">
    <h1>My Todo App</h1>
    <Summary todosCount={5} completedTodosCount={3} />
    <TodoList
     todoItems={[
                {
                    id: "_xss6p50dk",
                    description: "Check Reddit",
                    isCompleted: true
                },
                {
                    id: "_alqv4d8mp",
                    description: "Water plants",
                    isCompleted: false
                },
                {
                    id: "_s7nx464tr",
                    description: "Build a todo app in React",
                    isCompleted: false
                }
            ]}
    />
  </div>
);

export default App;
