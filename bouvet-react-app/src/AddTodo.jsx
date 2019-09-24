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
