# Exercise 4 - State management
:book: At the moment our application is only a composition of visual elements. All data so far is hard-coded into our app. Unfortunately, any real-world app needs to handle data, and there are many, many ways of approaching this problem. 

## In this exercise you will learn:
- To use the hook _useState_ for state inside of function components
- To use _context_ and _useContext_ to manage state globally in the app

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

## 4.1 Hooks and useState

:book: _Hooks_ are a fairly new and very exciting feature in React. They allow for using state and having side-effects in function components, something that has previously only been possible in class components.

Some useful hooks are: 
- _useState_: Persist value between renders, trigger re-render
- _useRef_: Persist value between renders, no re-render
- _useEffect_: Side effects that run after render
- _useReducer_: useState in reducer pattern

A couple of important rules about hooks:
- Only call them at the top level of your React function (not inside loops, conditions or nested functions) - this is to ensure that they are called in the same order every time a component renders
- Only call hooks from React functions (not in regular JavaScript functions)

The useState hook follows this pattern:
```js
const [thing, setThing] = usestate('defaultThing')
```
Where _thing_ is the value of the state, _setThing_ gives us a function to update the state, and _defaultThing_ is whatever you pass to useState as a default value - this can be a string, an empty array etc., but it should have a value.

### 4.1.1 Initiate state
:book: We want to add state for our _todos_. We will do this at the top level in our application - `App.jsx` - with the help of useState. We will then pass this state to the child components using props.

:pencil2: At the beginning of your App function component, paste in:
```js
const [todos, setTodos] = React.useState([
        {
            id: "_xss6p50dk",
            description: "Check Reddit",
            isCompleted: true
        },
        {
            id: "_alqv4d8mp",
            description: "Water plants",
            isCompleted: false
        },
        {
            id: "_s7nx464tr",
            description: "Build a todo app in React",
            isCompleted: false
        }
    ]);
```

:pencil2: Then remove the array we passed as the _todoItems_ prop in TodoList, and pass _todos_ instead:

```js
 <TodoList todoItems={todos}/>
```

### 4.1.2 Add todo
We now want the possibility to add a todo. 

:pencil2: In `App.jsx` add this function before the return. It will take a copy of the current todos (easily done by using the spread operator), and amend the new todo, after which it replaces the current value of todos with the value of newTodos using setTodos: 
```js
     const addTodo = (id, description) => {
         const newTodos = [...todos, { id, description, completed: false }];
         setTodos(newTodos);
     };
```

:pencil2: Create an `AddTodo.jsx` file if you haven't already, and type this in:

```js
import React from "react";

const AddTodo = ({ addTodo }) => {

    // use useState to save the value of the input field in state
    const [value, setValue] = React.useState("");

    // generate random IDs for our todos
    function generateId() {
        return (
            "_" +
            Math.random()
                .toString(36)
                .substr(2, 9)
        );
    }
    
    // on submit, if value is null or undefined, return without adding a todo
    // otherwise add a todo with a random ID and the value from the input field
    // then set the input field to an empty string
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(generateId(), value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default AddTodo;
```

:pencil2: Now go back to `App.jsx` and import AddTodo. Then add the _AddTodo_ component below _TodoList_ in your return statement passing in the _addTodo_ function and the _todos_ as props:
```js
<AddTodo addTodo={addTodo} todos={todos}/>
```
You should now be able to add a todo with a unique id.

### 4.1.3 Remove Todo
:pencil2: We use filter to return an array that no longer contains the element that matches the id of the todo we want to delete. Add this function to App.jsx and send it through as a prop to TodoItem (remember that it needs to be sent through `TodoList.jsx`):
```js
   const removeTodo = id => {
        setTodos(todos => todos.filter(t => t.id !== id));
    };
```
:pencil: Also remember to update proptypes to expect a new prop that is a function

:pencil2: Now that you have added the function to `TodoItem.jsx` as a prop you can add an _onClick_ event handler on the delete button:
```js
 <button type="button" onClick={() => removeTodo(id)}>Delete</button>
 ```

### 4.1.4 Remove default todos
:star: If you want to you can now remove the default todos in useState in `App.jsx` and instead leave an empty array. 
```js
const [todos, setTodos] = React.useState([]);
```

### 4.1.5 Clean up
If something isn't working, please check the instructions again or ask the instructors for help. App.jsx should now look something like this:
```js
import React from "react";
import Summary from "./Summary";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

import "./app.css";

const App = () => {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (id, description) => {
        const newTodos = [...todos, { id, description, completed: false }];
        setTodos(newTodos);
    };

    const removeTodo = id => {
        setTodos(todos => todos.filter(t => t.id !== id));
    };

    return (
        <div className="app">
            <h1>My Todo App</h1>
            <Summary todosCount={5} completedTodosCount={2} />
            <TodoList todoItems={todos} removeTodo={removeTodo} />
            <AddTodo addTodo={addTodo} todos={todos} />
        </div>
    );
};

export default App;
```

## 4.2 - Context API and useContext
React now allows for internal state in both function and class components, using useState or setState respectively. Sometimes, when you only need to pass props through a few components, all you need is internal state. There are however options for managing state globally - two of which are Context and Redux. This is typically used for larger applications that has a lot of state. Knowing when to use which mechanism is part of the learning curve with this stack.

When we use props we pass data from a parent component to a child component. We could pass props through 50 components if we wanted to, but this is tedious and error prone. React Context is a really good alternative to solve this problem. React Context is a way for a child component to directly access a value without props. With context we can share data that can be considered global for a tree of React components. Let's say we want to add a “theme” prop in order to style the delete button in todoItem.

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
    todoItems={todos}
    removeTodo={removeTodo}
/>
```

:pencil2: In the `TodoList` component pass the prop to `TodoItem`.
```js
const TodoList = ({todoItems, removeTodo, theme}) => (
    <div>
        {todoItems.map(todoItem => (
            <TodoItem 
                key={todoItem.id} 
                id={todoItem.id} 
                description={todoItem.description}
                removeTodo={removeTodo} 
                theme={theme}/>
        ))}
    </div>
)
```

:pencil2: Now we need to use this `theme` prop to set the background color of the delete button:
```js
const TodoItem = ({ id, description, removeTodo, theme }) => (
    <div>
        <input type="checkbox" id={`todoItemCheckbox-${id}`} />
        <label htmlFor={`todoItemCheckbox-${id}`}>{description}</label>
        <button
            type="button"
            onClick={() => removeTodo(id)}
            style={{ backgroundColor: theme.background }}
        >
            Delete
        </button>
    </div>
);
```

If we use context, we can avoid passing props through `Todolist` to set the background color of the button.  

:pencil2: Rename `theme.js` to `themeContext.js`. Use React.createContext to create a context for the current theme (with "light" as the default) in `themeContext.js`.
```js
export const ThemeContext = React.createContext(
    themes.light
);
```

:book: We can now access ThemeContext in any component using the _useContext_ hook:

```js
import { ThemeContext } from "./themeContext";

...

const theme = React.useContext(ThemeContext);
```

:pencil2: Import ThemeContext to TodoItem.jsx and with the help of useContext, style the backgroundColor of the delete button using themeContext.
```js
const TodoItem = ({ description, id, removeTodo }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <div className="todo-item__container">
            <div>
                <div>
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
```  

The delete button should now render to the sceen with the current theme color. 


# Exercise 6 - Completing the Todo app

## In this exercise you will learn to:

- Create more React components and modify Redux state

## 6.1 - Remaining work //Sara - denne legges helt på slutten, jeg vet ikke hvilket nummer det blir, men dette er en bonusoppgave

At this point we've made some React components, applied some styling, used hooks for internal state, installed Redux, and used Redux to handle more state. You should therefore have all the necessary tools to implement the remaining features.

Happy hacking!

:pencil2: Using hooks and the `Summary` component, get `todosCount` and `completedTodosCount` to display the correct number based on the `completed` status on each todo item (true or false).

:pencil2: Change the value of `completed` of a given todo from false to true when the checkbox is ticked (and back again when unchecked)




### [Go to exercise 5 :arrow_right:](../exercise-5/README.md)
