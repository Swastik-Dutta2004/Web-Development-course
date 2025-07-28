import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-orange-200">
        <div className="todo">
          <h1>Your todo list</h1>
        </div>
      </div>
    </>
  )
}

export default App
