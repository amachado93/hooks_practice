import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add one more!</button>
      {count > 0 
        &&
        <button onClick={() => setCount(count - 1)}>take one off!</button>        
      }   
    </div>
  );
}

export default App;
