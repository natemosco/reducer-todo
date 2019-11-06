import React, { useContext } from 'react'
import FormContext from "../context/FormContext";

export default function ListItem(props) {
    const { dispatch } = useContext(FormContext);
    const clickCheckMark = (e) => {
        let id = Number(e.target.id);
        dispatch({ type: "MARK_TRUE_OR_FALSE", payload: id });
    }
    return (
        <div>
            <h3>{props.todo.item}</h3>
            <input type="checkbox" id={props.todo.id} checked={props.todo.completed} onClick={clickCheckMark} />
        </div>
    )
}
