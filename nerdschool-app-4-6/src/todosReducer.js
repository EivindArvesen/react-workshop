import Todo from './Todo';

const defaultTodos = [];

const todosReducer = (todos = defaultTodos, action) => {
    switch (action.type) {
        case 'CREATE_TODO': {
            const newTodoId = todos.length + 1;
            return [
                ...todos,
                new Todo(newTodoId, action.description)
            ];
        }
        default:
            return todos;
    }
};

export default todosReducer;
