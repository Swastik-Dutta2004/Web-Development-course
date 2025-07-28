import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("swastik")
  const [form, setform] = useState({email:"", phone:""})

  
  const user = (e)=>{
    // setname(e.target.value)
    setform({...form, [e.target.name]: e.target.value})
  }

  const handleClick = () =>{
    alert("Hey i am clicked")
      console.log(form);
  }

  const notifying = () =>{
    alert("Same on you")    
  }

  return (
    <>
      {/* <div className="red" onMouseOver={notifying}>
        I am red light area
        </div> */}

      <input type="text" name= 'email' value={form.email} onChange={user}/>
      <input type="text" name= 'phone' value={form.phone} onChange={user}/>


      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

export default App
