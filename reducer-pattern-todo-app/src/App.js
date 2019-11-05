import React, { useReducer, useState } from 'react';

import { initialState, appReducer } from "./reducers/reducers"
import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div className="App">

    </div>
  );
}

export default App;
