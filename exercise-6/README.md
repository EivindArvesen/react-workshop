# Exercise 6 - Bonus assignments

If you're done with all the previous assignments, you can try the following:

- Add an "add"-button that does the same as pressing <kbd>Enter</kbd> in the input field (adds a new ToDo-item).

- Add some CSS to your components, in order to style the page elements more like the app spec (see below).

- Add some default ToDo-items, both in the regular as well as the archive list.

- Implement functionality that lets you delete archived ToDo-items.

- Fix your application so that it displays the correct number of completed ToDo-items.

- Implement functionality that lets you unarchive archived ToDo-items.

- Make completed ToDo-items appear with a strikehtrough.


## Reminder: Todo app spec

Here's the spec for our todo app as discussed in the previous exercise, for reference.

![](../images/todo-app.png)

### Header

- There will be an `h1` header for the name of this glorious app
- There will be a sub-header with slightly emphasized text stating how many total tasks there are and how many of those are completed.

### Adding a task

- There will be a textbox where a user can enter the description of a task
- There will be an "Add" button which will add the task to the list of existing tasks/todos.

### Listing todos

- There will be a list of todo items. Each todo item will consist of:
  - A checkbox with the description of the todo
  - A delete button which will remove the todo item permanently

![](../images/todo-app-components.png)

1.  `App`. Will contain the header text and the sub-components.
1.  `Summary`. Will contain the total number of tasks and show how many of those are completed.
1.  `AddTodo`. Will contain the textbox and Add-button.
1.  `TodoList`. Will contain the list for all todo items.
1.  `TodoItem`. Will contain a checkbox that marks a task as In Progress or Done, and a Delete button.
