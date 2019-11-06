import React, { useState } from "react";


// const [list, setList] = useState({
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   });

const initialState = {
    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Do my project',
        completed: false,
        id: 389987589
    },
    {
        item: 'Feed the baby',
        completed: false,
        id: 389298589
    }]
}

const appReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todoList: [...state.todoList,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
                ]
            };
        case "MARK_TRUE_OR_FALSE":
            let modifiedArray = state.todoList.map(eachObj => {
                if (action.payload === eachObj.id) {
                    return {
                        ...eachObj,
                        completed: !eachObj.completed,
                    }
                } else {
                    return eachObj
                }

            })

            return {
                ...state,
                todoList: modifiedArray
            };
        case "DELETE_COMPLETED":
            let filteredArray = state.todoList.filter(eachObj => {
                return eachObj.completed === false
            });
            return {
                ...state,
                todoList: filteredArray
            }
    }
}

export { appReducer, initialState }