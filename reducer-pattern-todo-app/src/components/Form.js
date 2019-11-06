import React, { useContext } from 'react';
import FormContext from "../context/FormContext";

export default function Form() {
    const { dispatch, formInput, setFormInput } = useContext(FormContext);

    const handleChange = (e) => {
        setFormInput(e.target.value)
    }
    const addTodo = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD", payload: formInput })
    }
    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({ type: "DELETE_COMPLETED" })
    }
    return (
        <form>
            <label htmlFor="addStuff">Add Todo:</label>
            <input type="text" id="addStuff" value={formInput} placeholder="ex. mow the lawn" onChange={handleChange} />
            <button onClick={addTodo}>Add New Task</button>
            <button onClick={clearCompleted}>Clear Completed Tasks</button>
        </form>
    )
} 
