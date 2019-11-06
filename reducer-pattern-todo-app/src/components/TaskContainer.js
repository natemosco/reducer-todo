import React, { useContext } from 'react';
import ListItem from "./ListItem";
import Form from "./Form";
import FormContext from "../context/FormContext";


export default function TaskContainer() {
    const { state } = useContext(FormContext)
    return (
        <div>
            {state.todoList.map(todo => <ListItem key={todo.id} todo={todo}></ListItem>)}
            <Form></Form>
        </div>
    )
}
