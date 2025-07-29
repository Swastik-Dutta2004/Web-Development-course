import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const HandelEdit = () => {};

  const HandelDelete = () => {};

  const HandelAdd = () => {
    setTodos([...todos, { id:uuidv4() ,todo, iscompleted: false }]);
    console.log(todos);
  };

 
  

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-orange-300 min-h-[80vh]">
        <div className="addtodo flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg font-bold">Add Todo</h2>
          <input
            className="text-black w-80 p-2 rounded"
            value={todo}
            type="text"
            onChange={HandelChange}
          />
          <button
            className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-xl font-bold text-white"
            onClick={HandelAdd}
          >
            Add
          </button>
        </div>

        <h2 className="text-lg font-bold p-2">Your todo list</h2>

        <div className="todos">
          {todos.map((item, index) => {
            return (
              <div key={item.id} className="todo flex justify-between my-2">
                <input onChange={HandelCheckbox} value={item.iscompleted} type="checkbox" name={item.id} id=""/>
                <div
                  className={`text m-1 ${
                    item.iscompleted ? "line-through" : ""
                  }`}
                >
                  {item.todo}
                </div>

                <
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
