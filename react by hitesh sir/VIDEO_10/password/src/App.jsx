import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) string += "0123456789"
      if (charAllowed) string += "!@#$%^&*()_+-=[]{}|;:.<>?/`~"
    }, [length, numberAllowed, charAllowed, setpassword],
  )


  return (
    <>
      <h1 className='text-6xl text-center text-purple-600'>PAssword manager</h1>
    </>
  )
}

export default App
