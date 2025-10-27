import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  const [Todo, setTodo] = useState('')
  const [Todos, setTodos] = useState([])

  const addtodo = () => {
    if (setTodo.trim() === "") {
      alert("write Somethink before save")
      return
    }

    setTodos([...Todos])
    setTodo('')
  }
  return (
    <>
      <Navbar />

      <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
        {/* Add Todo Section */}
        <h1 className="text-2xl font-semibold text-gray-700 text-center mb-5">
          ✏️ Add a New Task
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={Todo}
            onChange={(e)=> setTodo(e.target.value) }
            placeholder="Write your todo..."
            className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addtodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {Todo.length() === 0 ? (
            <p className="text-gray-500 text-center">No todos yet</p>) : (
              Todos.map((Todo,index) => (
                <div
                key={index}
                className="flex justify-between items-center bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 hover:shadow-md transition"
              >
                <p className="text-gray-700 font-medium"></p>

                <div className="flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800 font-semibold"
                  onClick={}>
                    Edit
                  </button>
                  <button
                    
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
              ))
            )
          }
              
          
        </div>
      </div>
    </>
  );
}

export default App;
