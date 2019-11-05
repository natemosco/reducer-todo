import React from 'react'

export default function ListItem(props) {
    return (
        <div>
            <h3>{props.todo.item}</h3>
            <input type="checkbox" checked={props.todo.completed} />
        </div>
    )
}
