const todosReducer = (archivedTodos = [], action) => {
    switch (action.type) {
      default:
        return archivedTodos;
      case "ARCHIVE_TODO":
        const newTodoId = String(archivedTodos.length + 1);
        return [...archivedTodos, {id: newTodoId, description: action.description}];
    }
  };

  export default todosReducer;
