import React, { useState } from 'react';
import Header from './Header';


function App() {
  const [counter, setCounter] = useState(0);
  //Array [value, func]

  function increment() {
   setCounter(counter + 1);
  }

  return  (
    <div>
      <Header>
        contador : {counter}
      </Header>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
