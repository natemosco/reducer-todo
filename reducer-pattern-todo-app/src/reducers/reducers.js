import React, { useState } from "react";


// const [list, setList] = useState({
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   });

const initialState = [{
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

const appReducer = (state, action) => {
    return <div></div>
}

export { appReducer, initialState }