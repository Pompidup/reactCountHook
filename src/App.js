import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count} </p>
      <input value={count} onChange={(e) => setCount(e.target.value)}>
      </input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default App;
