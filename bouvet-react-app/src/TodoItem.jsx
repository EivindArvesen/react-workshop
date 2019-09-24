import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./themeContext";

import "./todoItem.css";

const TodoItem = ({ description, id, removeTodo }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className="todo-item__container">
      <div>
        <div className="todo-item__line">
          <input type="checkbox" id={`todoItemCheckbox-${id}`} />
          <label htmlFor={`todoItemCheckbox-${id}`}>
            {description}
          </label>
        </div>
        <button
          type="button"
          onClick={() => removeTodo(id)}
          style={{ backgroundColor: theme.background }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoItem;
