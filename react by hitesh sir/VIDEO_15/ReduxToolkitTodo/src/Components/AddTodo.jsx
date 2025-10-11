import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../fetures/todo/todoSlice";

function AddTodo() {
  const [Input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!Input.trim()) return; // prevent empty todos
    dispatch(addtodo(Input));
    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <form
        onSubmit={addTodoHandler}
        className="bg-gray-800 shadow-lg rounded-2xl p-8 flex items-center gap-4 w-full max-w-xl"
      >
        <input
          type="text"
          className="flex-1 bg-gray-900 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-gray-100 py-2 px-4 transition duration-200 ease-in-out"
          placeholder="✍️ Write your next Todo..."
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transform hover:scale-105 transition-all duration-200"
        >
          ➕ Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
