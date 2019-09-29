import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { archiveTodoAction } from './todoActions';

const ArchivedTodoListContainer = props =>(
    <div>
      <h2>Archive</h2>
      <TodoList {...props} />
    </div>
);

const mapStateToProps = state => ({
  todoItems: state.archivedTodos
});

const mapDispatchToProps = dispatch => ({
  archiveTodo: description => dispatch(archiveTodoAction(description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArchivedTodoListContainer);
