import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { createTodo } from "./todoActions";
import Todo from "./Todo";

class TodoListContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.createTodoItem("Wake up");
        this.props.createTodoItem("Do the dishes");
        this.props.createTodoItem("Fold clothes");
        this.props.createTodoItem("Browse Reddit");
    }

    render() {
        return <TodoList todoItems={this.props.todoItems} />;
    }
}

TodoListContainer.propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
    createTodoItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    todoItems: state.todos
});

const mapDispatchToProps = dispatch => ({
    createTodoItem: description => dispatch(createTodo(description))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);
