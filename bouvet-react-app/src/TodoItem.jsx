import React from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./themeContext";

import "./todoItem.css";

const TodoItem = ({ description, id, removeTodo, archiveTodo }) => {
  const theme = React.useContext(ThemeContext);

  const removeButton = (
    <button
      type="button"
      onClick={() => removeTodo(id)}
      style={{ backgroundColor: theme.background }}
    >
      Delete
    </button>
  );

  const archiveButton = (
    <button
      type="button"
      onClick={() => archiveTodo(id)}
      style={{ backgroundColor: theme.background }}
    >
      Archive
    </button>
  );

  return (
    <div className="todo-item__container">
      <div>
        <div className="todo-item__line">
          <input type="checkbox" id={`todoItemCheckbox-${id}`} />
          <label htmlFor={`todoItemCheckbox-${id}`}>
            {description}
          </label>
        </div>
        {removeTodo ? removeButton : null}
        {archiveTodo ? archiveButton : null}
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeTodo: PropTypes.func,
  archiveTodo: PropTypes.func
};

export default TodoItem;
