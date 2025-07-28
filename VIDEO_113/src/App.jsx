import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const HandelEdit = () => {};

  const HandelDelete = () => {};

  const HandelAdd = () => {
    setTodos([...todos, { todo, iscompleted: false }]);
    console.log(todos);
  };

  const HandelChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
     
        <h2 className="text-lg font-bold p-2">Your todo list</h2>

        <div className="todos">
          {todos.map((item, index) => {
            return (
              <div key={index} className="todo flex justify-between my-2">
                <input type="checkbox" name="" id="" />
                <div
                  className={`text m-1 ${
                    item.iscompleted ? "line-through text-gray-500" : ""
                  }`}
                >
                  {item.todo}
                </div>

                <div className="buttons">
                
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
