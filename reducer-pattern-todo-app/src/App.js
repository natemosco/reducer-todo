import React, { useReducer, useState, useContext } from 'react';

import FormContext from "./context/FormContext";
import { initialState, appReducer } from "./reducers/reducers"

import TaskContainer from "./components/TaskContainer";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [formInput, setFormInput] = useState("");

  const
  return (
    <div className="App">
      <h1>Your Todo List</h1>
      <FormContext.Provider value={state, dispatch, formInput}>
        <TaskContainer></TaskContainer>
      </FormContext.Provider>

    </div>
  );
}

export default App;
