import React from 'react';
import Summary from './Summary';
import TodoListContainer from './TodoListContainer';

import './app.css';

const App = () => (
    <div className="app">
        <h1>My Todo App</h1>
        <Summary todosCount={5} completedTodosCount={3} />
        <TodoListContainer />
    </div>
);

export default App;
