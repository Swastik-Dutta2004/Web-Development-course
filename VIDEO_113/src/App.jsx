import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
 
 const [isLoaded, setIsLoaded] = useState(false); // Track if data is loaded
 
  // Load todos from localStorage on component mount
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
        console.log("Loaded Todos:", parsedTodos); // Debug
      }
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
    } finally {
      setIsLoaded(true); // Mark as loaded regardless of success/failure
    }
  }, []);

  useEffect(() => {
    if (isLoaded) { // Only save after initial load to avoid overwriting with empty array
      try {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("Saved Todos:", todos); // Debug
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
    }
  }, [todos, isLoaded]);

  const HandelEdit = (id) => {
    const newTodotext = prompt("Enter the todo:")
    if(newTodotext?.trim()){
      const updatedTodos = todos.map((item) => {
    if (item.id === id) {
      return { ...item, todo: newTodotext };
    }           
    return item;
  });
  setTodos(updatedTodos);
  };
};

  const HandelDelete = (id) => {
  const updatedTodos = todos.filter(item => item.id !== id);
  setTodos(updatedTodos);
  };

  const HandelAdd = () => {
  if (todo.trim() === "") {
    alert("Please write something before saving.");
    return;
  }
  setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
  setTodo(""); // Clear the input after saving
};


  const HandelChange = (e) => {
    setTodo(e.target.value);
  };

  const HandelCheckbox = (e) => {
  const id = e.target.name;
  const updatedTodos = todos.map((item) => {
    if (item.id === id) {
      return { ...item, iscompleted: !item.iscompleted };
    }           
    return item;
  });
  setTodos(updatedTodos);
};

return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-black min-h-[80vh]">
        <div className="addtodo flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg text-white font-bold">Add Todo</h2>
          <input
            className="text-black w-80 p-2 rounded cursor-pointer" placeholder= "Write your Todo"
            value={todo}
            type="text"
            onChange={HandelChange}
          />
          <button
            className="bg-green-900 hover:bg-orange-700 px-4 py-2 rounded-xl font-bold text-white"
            onClick={HandelAdd}>Save</button>
        </div>

        <h2 className="text-lg text-white font-bold p-2">Your todo list</h2>

        <div className="todos bg-slate-600 p-3 rounded-xl">
          {todos.map((item) => {
            return (
              <div key={item.id} className="todo flex justify-between my-2 font-bold border border-solid border-white rounded-xl bg-slate-400">
                <input onChange={HandelCheckbox} checked={item.iscompleted} type="checkbox" name={item.id} />

                <div
                  className={`text m-1 ${
                    item.iscompleted ? "line-through" : ""
                  }`}>{item.todo}</div>

                <div className="buttons flex h-full">
                  <button
                    className="bg-green-800 hover:bg-white p-2 py-1 m-1 rounded-xl font-bold text-black "
                    onClick={() => HandelEdit(item.id)}>Edit
                  </button>
                  <button
                    className="bg-orange-600 hover:bg-white p-2 py-1 m-1 rounded-xl font-bold text-black"
                    onClick={() => HandelDelete(item.id)}>Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
