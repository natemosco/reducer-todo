import React from 'react';
import ListItem from "./ListItem";
import Form from "./Form";
export default function TaskContainer() {
    return (
        <div>
            {/* something.map(todo => <ListItem key={todo.id} todo={todo}></ListItem>) */}
            <Form></Form>
        </div>
    )
}
