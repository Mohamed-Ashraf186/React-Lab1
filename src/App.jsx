
import './App.css';
import Counter from './counter';
import { useState } from 'react';

function App() {

  const [count,setCount]=useState(0);
  const onValueChange = event => setCount(event.target.value);

  return (
    <div className="App">
      <div className="container">
        <div className="counter">{ count }</div>
        <Counter count = {count} setCount = {setCount}/>
      </div>
    </div>
  );
}

export default App;
