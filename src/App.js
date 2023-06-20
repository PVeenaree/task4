import React, { useState } from 'react';
import Task4 from './task4';
import './App.css';

function App() {
  const [displayTask, setDisplayTask] = useState(false);

  function handleClick() {
    setDisplayTask(!displayTask);
    
  }

  return (
    <div className="App">
      <input onClick={handleClick} type="button" value="Toggle" />
      {displayTask && <Task4 />}
    </div>
  );
}

export default App;