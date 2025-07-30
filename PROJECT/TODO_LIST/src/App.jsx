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
      <div className="container mx-auto my-5 rounded-xl p-5 min-h-[80vh] flex flex-col items-center justify-center gap-8">
  
  {/* Add Todo Section */}
  <div className="addTodo bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
    <h2 className='text-xl text-white font-bold mb-4 text-center'>Add Todo</h2>
    <div className="flex flex-col gap-4">
      <input 
        type="text" 
        className='text-black w-full rounded p-2 outline-none' 
        placeholder='Write Your Todo' 
      />
      <button className='font-bold bg-green-700 hover:bg-orange-700 rounded-xl text-white px-4 py-2 transition-all duration-300'>
        Save
      </button>
    </div>
  </div>

  {/* Todo List Section */}
  <div className="todoList bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md">
    <h2 className='text-xl font-bold text-center mb-4 text-gray-800'>Your Todo List</h2>
    
    <div className="todos flex items-center justify-between gap-2 bg-white p-3 rounded shadow mb-2">
      <input 
        type="text" 
        className="flex-1 rounded p-2 text-black border border-gray-300 outline-none" 
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Edit</button>
      <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Delete</button>
    </div>
    
    {/* You can map over your todo array here to list all todos */}
  </div>
</div>

    </>
  )
}

export default App
