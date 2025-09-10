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

      for (let index = 1; index <= array.length; index++) {
        let char = Math.floor(Math.random() * string.length + 1)
        pass = string.charAt(char)

      }
      setpassword(pass)
    }, [length, numberAllowed, charAllowed, setpassword],
  )


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-purple-800 bg-amber-500"> 
        <h1 className='text-2xl font-bold text-center'>PassWord Generator</h1>
        <div className="flex gap-2">
          <input type="text"
            value={password}
            placeholder='Password'
            className="w-full py-1 px-2 my-3 rounded bg-amber-300 text-black outline-none"
            readOnly
            />
            <button className='bg-blue-600 text-lg font-bold rounded px-2 my-auto text-teal-50 p-1 hover:bg-blue-800 transition duration-150'>Copy</button>
        </div>
        <div className="flex gap-4">
          <div className=" flex gap-x-2 items-center">
            <input type="range"
            max={100}
            min={8}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className='font-bold'>Lenght: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
