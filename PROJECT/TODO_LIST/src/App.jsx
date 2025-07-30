import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const HandleChange = (e) => {
    setTodo(e.target.value)
  }
  const HandleAdd = () => {
    if(todo.trim()=== ""){
      alert("Write something before save")
      return
    }
    setTodos([...todos,{id:uuidv4(), todo, iscompleted: false}])
    setTodo("")
  }

  const HandleEdit = (id) => {
    const newTodotext = prompt("Enter the What you want yo update")
    
  }

  const HandleDelete = () => {
    
  }

  const HandleCheckbox = () => {

  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 min-h-[80vh] flex flex-col items-center justify-center gap-8">
        {/* Add Todo Section */}
        <div className="addTodo bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl text-white font-bold mb-4 text-center">
            Add Todo
          </h2>
          <div className="flex flex-col gap-4">
            <input
              value={todo}
              type="text"
              className="text-black w-full rounded p-2 outline-none"
              placeholder="Write Your Todo"
              onChange={HandleChange}
            />
            <button className="font-bold bg-green-700 hover:bg-orange-700 rounded-xl text-white px-4 py-2 transition-all duration-300" onClick={HandleAdd}>
              Save
            </button>
          </div>
        </div>

        {/* Todo List Section */}
        <div className="todoList bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
            Your Todo List
          </h2>

          <div className="todos items-center gap-2 bg-white p-3 rounded shadow mb-2">
            {todos.map((item) => {
              return (
            <div className="flex items-center gap-3 flex-1 justify-between border border-black m-2 rounded-lg">
              <input type="checkbox" onChange={HandleCheckbox} checked = {item.iscompleted} name={item.id}/>
              
            <div className={` ${item.iscompleted? "line-through" : ""}`}>{item.todo}</div>

            {/* Right: Edit and Delete Buttons */}
            <div className="buttons flex gap-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded" onClick={() => HandleEdit(item.id)}>
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" onClick={() => HandleDelete(item.id)}>
                Delete
              </button>
            </div>
            </div>
              );
            })}
          </div>

          {/* Map your todos here */}
        </div>
      </div>
    </>
  );
}

export default App;
