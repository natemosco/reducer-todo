import React from 'react'

export default function Form() {
    return (
        <Form>
            <label htmlFor="addStuff">Add Todo:</label>
            <input type="text" id="addStuff" value={todo} placeholder="ex. mow the lawn" />
        </Form>
    )
}
