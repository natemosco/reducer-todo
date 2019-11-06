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
    return (
        <form type="submit" onSubmit={addTodo}>
            <label htmlFor="addStuff">Add Todo:</label>
            <input type="text" id="addStuff" value={formInput} placeholder="ex. mow the lawn" onChange={handleChange} />
            <button>Add New Task</button>
        </form>
    )
} 
