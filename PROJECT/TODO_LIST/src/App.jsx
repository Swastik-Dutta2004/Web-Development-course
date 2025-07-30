import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 ">
        <div className="addTodo">        
          <h2 className='text-lg text-white font-bold'>Add Todo</h2>
          <input type="text" className='text-black cursor-pointer w-80 rounded p-2' placeholder='Write Your Todos'/>
          <button className='font-bold bg-green-900 hover:bg-orange-700 rounded-xl text-white px-2 py-2'>Save</button>
         </div>

          <h2>Your Todo List</h2>
         <div className="Todolist">
          <div className="todos">
            <input type="text" />
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div> 
      </div>
    </>
  )
}

export default App
