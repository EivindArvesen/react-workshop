# Exercise 4 - State management
:book: At the moment our application is only a composition of visual elements. All data so far is hard-coded into our app. Unfortunately, any real-world app needs to handle data, and there are many, many ways of approaching this problem. 

## In this exercise you will learn:
- To use the context API
- 

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

1. `App`. Will contain the header text and the sub-components.
1. `Summary`. Will contain the total number of tasks and show how many of those are completed.
1. `AddTodo`. Will contain the textbox and Add-button.
1. `TodoList`. Will contain the list for all todo items.
1. `TodoItem`. Will contain a checkbox that marks a task as In Progress or Done, and a Delete button.

## 4.1 - Context API
Remember that React has built-in internal state in class components. Sometimes, all you need is internal state, in which case you should use that mechanism. Learning when to use which mechanism is one of the learning curves with this stack.

When we use props we pass data from a parent component to a child component. It allows us to access state at different levels of the component. In situations where you’re looking to get the state from the top of your react tree to the bottom you might end up passing props through components that do not necessarily need them.

React Context is a really good alternative to solve this problem. React Context is a way for a child component to access a value in a parent component. With context we can share data that can be considered global for a tree of React components. Lets say we want to add a “theme” prop in order to style the delete button in todoItem.

:pencil2: create a new file `theme.js` and copy & paste the following content:
```js
import React from "react";

export const themes = {
    light: {
      foreground: '#000000',
      background: '#c4d3c9',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  };
```

:pencil2: Now in `App.js` import the `theme.js` file and send the theme prop to the `TodoList` component:
```js
import {themes} from './theme’;

<TodoList
    theme={themes.light}
    todoItems={this.state.todoItems}
/>
```

:pencil2: In the `TodoList` component pass the prop to `TodoItem`.
```js
const TodoList = ({todoItems, theme}) => (
    <div>
        {todoItems.map(todoItem => (
            <TodoItem key={todoItem.id} id={todoItem.id} description={todoItem.description} theme={theme}/>
        ))}
    </div>
)
```

:pencil2: Now we need to use this `theme` prop to set the background color of the delete button:
```js
const TodoItem = ({ id, description, theme }) => (
    <div>
        <input type="checkbox" id={`todoItemCheckbox-${id}`} />
        <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
        <button type="button" style={{backgroundColor: theme.background}}>Delete</button>
    </div>
);
```

If we use context, we can avoid passing props through `Todolist` to set the background color of the button.  

:pencil2: Rename `theme.js` to `themeContext.js`. Create a context for the current theme (with "light" as the default) in `themeContext.js`.
```js
export const ThemeContext = React.createContext(
    themes.light
);
```

:pencil2: Use a Provider to pass the current theme to the tree below. Now any component can read it, no matter how deep it is.
```js
import {ThemeContext} from './themeContext’;

<ThemeContext.Provider value={themes.light}>
    <TodoList
        todoItems={this.state.todoItems}
    />
</ThemeContext.Provider>
```

:pencil2: Assign a `contextType` to read the current theme context. React will find the closest theme Provider above and use its value.

```js
import {ThemeContext} from './themeContext’;

class TodoItem extends React.Component {

static contextType = ThemeContext;

render() {
    let props = this.props;
    let theme = this.context;
    
    return(
    <div>
        <input type="checkbox" id={`todoItemCheckbox-${props.id}`} />
        <label htmlFor={`todoItemCheckbox-${props.id}`}>{props.description}</label>
        <button type="button" style={{backgroundColor: theme.background}} >Delete</button>
    </div>
    )
}
```

The delete button should now render to the sceen with the current theme color. 


### [Go to exercise 5 :arrow_right:](../exercise-5/README.md)
