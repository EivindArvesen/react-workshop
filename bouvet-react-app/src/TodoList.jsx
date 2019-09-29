import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, removeTodo, archiveTodo }) => (
  <div>
    {
      todoItems.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          description={todoItem.description}
          removeTodo={removeTodo}
          archiveTodo={archiveTodo}
        />
      ))
    }
  </div>
);

TodoList.defaultProps = {
  todoItems: []
};

TodoList.propTypes = {
  todoItems: PropTypes.array
};

export default TodoList;
