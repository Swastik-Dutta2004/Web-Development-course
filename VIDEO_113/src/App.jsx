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
  <div className="container mx-auto my-8 px-4 sm:px-8 max-w-3xl bg-gray-900 text-white rounded-2xl shadow-lg py-6 min-h-[80vh]">
    
    {/* Add Todo Section */}
    <div className="addtodo flex flex-col items-center gap-4 mb-8">
      <h2 className="text-2xl font-semibold">Add Todo</h2>
      <input
        type="text"
        placeholder="Write your Todo"
        value={todo}
        onChange={HandelChange}
        className="w-full sm:w-96 p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        onClick={HandelAdd}
        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
      >
        Save
      </button>
    </div>

    {/* Todo List Section */}
    <h2 className="text-xl font-semibold mb-4">Your Todo List</h2>
    <div className="todos space-y-4 ">
      {todos.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row justify-between items-center bg-gray-700 rounded-lg p-4 shadow-md"
        >
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="checkbox"
              checked={item.iscompleted}
              onChange={HandelCheckbox}
              name={item.id}
              className="w-5 h-5"
            />
            <p
              className={`text-lg ${
                item.iscompleted ? "line-through text-gray-300" : ""
              }`}
            >
              {item.todo}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-3 sm:mt-0">
            <button
              onClick={() => HandelEdit(item.id)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={() => HandelDelete(item.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

  );
}

export default App;
