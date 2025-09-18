import { useState, useEffect } from 'react'
import { TodoProvider } from './Context/TodoContext'
import './App.css'

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => {[{id: Date.now(), ...todo},...prev]})
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((preTodos) => preTodos.id === id ? todo : preTodos))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todo))
  }

  const toggleCompletd = (id) => {
    setTodos((prev) => prev.map((preTodo) => preTodo === id ? {...preTodo, completed: !preTodo.completed} : preTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todos"))
    
    if (todos & todos.lenght > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])
  
  
  return (
    <TodoProvider value={{Todos, addTodo,deleteTodo,updateTodo,toggleCompletd}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
