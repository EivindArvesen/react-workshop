import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import Todo from './Todo';

const TodoList = ({ todoItems }) => (
    <div>
        {todoItems.map(todoItem => (
            <TodoItem key={todoItem.id} id={todoItem.id} description={todoItem.description} />
        ))}
    </div>
);

TodoList.defaultProps = {
    todoItems: [],
};

TodoList.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)),
};

export default TodoList;
