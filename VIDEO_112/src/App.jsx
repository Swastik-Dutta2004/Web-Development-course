import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("swastik")

  const handleClick = () =>{
    alert("Hey i am clicked")
  }

  const notifying = () =>{
    alert("Same on you")
  }

  const user = (e)=>{
    setname(e.target.value)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div className="red" onMouseOver={notifying}>
        I am red light area
      </div>

      <input type="text" value={name} onChange={user}/>
    </>
  )
}

export default App
