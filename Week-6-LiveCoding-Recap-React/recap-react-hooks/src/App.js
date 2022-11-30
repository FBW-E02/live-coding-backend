
import React from 'react';
import { createContext } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export const MyContext = createContext()

function App() {
  const name="Naqvi"
  return (
    <MyContext.Provider value={name}>
      <div className="App">
        <h1>App</h1>
        <ChildOne/>
        <ChildTwo/>
      </div>
     </MyContext.Provider>
  );
}

export default App;