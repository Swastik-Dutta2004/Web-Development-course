import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passworRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:.<>?/`~"

      for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)

      }
      setpassword(pass)
    }, [length, numberAllowed, charAllowed,],
  )


  const copyToClipboard = () => {
    passworRef.current?.select()
    // passworRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }
  useEffect(() => {
    passwordGenerator()
  }, [length, setNumberAllowed, setcharAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-8 text-purple-800 bg-amber-500 py-4">
        <h1 className='text-2xl font-bold text-center'>PassWord Generator</h1>
        <div className="flex gap-2">
          <input type="text"
            value={password}
            placeholder='Password'
            className="w-full py-1 px-2 my-3 rounded bg-amber-300 text-black outline-none"
            readOnly
            ref={passworRef}
          />
          <button onClick={copyToClipboard} className='bg-blue-600 text-lg font-bold rounded px-2 my-auto text-teal-50 p-1 hover:bg-blue-800 transition duration-150 cursor-pointer'>Copy</button>
        </div>
        <div className="flex gap-4">
          <div className=" flex gap-x-2 items-center ">
            <input type="range"
              className='cursor-pointer'
              min={8}
              max={40}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='font-bold'>Lenght: {length}</label>
          </div>
          <div className="">
            <input type="checkbox"
              className='cursor-pointer'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label className='font-bold'>Number</label>
          </div>
          <div className="">
            <input type="checkbox"
              className='cursor-pointer'
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }}
            />
            <label className='font-bold'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
