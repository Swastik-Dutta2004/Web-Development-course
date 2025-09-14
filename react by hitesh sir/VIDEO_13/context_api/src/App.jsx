import { useState } from 'react'
import UseContextProvider from './Context/UserContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UseContextProvider>
      
    </UseContextProvider>
  )
}

export default App
