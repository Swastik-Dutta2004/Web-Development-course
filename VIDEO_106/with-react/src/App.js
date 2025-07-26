import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [value, setrvalue] = useState(0)
  return (
    <div className="App">
      <div className='value'>{value}</div>
      <button onClick={()=>{setrvalue(value + 1)}}>Click me</button>
    </div>
  );
}

export default App;
