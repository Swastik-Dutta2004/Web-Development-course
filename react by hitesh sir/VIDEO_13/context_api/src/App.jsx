import { useState } from 'react'
import UserContextPorvider from './Context/UserContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextPorvider>
      
    </UserContextPorvider>
  )
}

export default App
