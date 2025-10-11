import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemovedTodo, upadateTodo } from "../fetures/todo/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        ✅ Your Todos
      </h2>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No todos yet. Add one!</p>
      ) : (
        <ul className="list-none space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-xl shadow-md hover:bg-gray-700 transition"
            >
              <span className="text-gray-100 font-medium">{todo.text}</span>

              <div className="flex gap-3">
                {/* Update button */}
                <button
                  onClick={() => dispatch(upadateTodo(todo.id))}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 transition"
                >
                  ✏️ Edit
                </button>

                {/* Delete button */}
                <button
                  onClick={() => dispatch(RemovedTodo(todo.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg flex items-center gap-1 transition"
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
