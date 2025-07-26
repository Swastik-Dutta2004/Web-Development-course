import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  const [value, setrvalue] = useState(0)
  return (
    <div className="App">
      <Navbar/>
      <div className='value'>{value}</div>
      <button onClick={()=>{setrvalue(value + 1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
