import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <div className=''>
          <h1>Add Todo</h1>
          <input type="text" placeholder='Write Your todo'/>
          <button>Save</button>
        </div>
      </div>
    </>
  )
}

export default App
