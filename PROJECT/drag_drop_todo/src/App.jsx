import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";


function App() {
  const [Todo, setTodo] = useState('')
  const [Todos, setTodos] = useState([])
  const [isSet, setIsSet] = useState(false)

  const addtodo = () => {
    if (Todo.trim() === "") {
      alert("Write something before saving!");
      return;
    }

    const newTodo = { id: uuidv4(), text: Todo };
    setTodos([...Todos, newTodo]);
    setTodo("");
  };

  const HandleChecked = (e) => {
    const id = e.target.name
    const check = Todos.map((items) => {
      if (items.id === id) {
        return { ...items, iscompleted: !items.iscompleted }
      }
      return items
    })
    setTodos(check)
  }


  useEffect(() => {
    try {
      const SavedTodo = JSON.parse(localStorage.getItem("Todos"))
      if (SavedTodo) {
        setTodos(SavedTodo)
        console.log(SavedTodo);
      }
    } catch (error) {
      console.error("Error in loading todos from localstorage", error);
    }
    finally {
      setIsSet(true)
    }
  }, [])

  useEffect(() => {
    if (isSet) {
      try {
        localStorage.setItem("Todos", JSON.stringify(Todos))
        console.log("Saved todos", Todos);
      } catch (error) {
        console.error("Error in saving todos in localStronge", error);
      }
    }
  }, [Todos, isSet])


  const deleteTodo = (id) => {
    const updateTodo = Todos.filter(items => items.id !== id)
    setTodos(updateTodo)
  }

  const EditTodo = (id) => {
    const newTodotext = prompt("Enter your todo")
    if (newTodotext?.trim()) {
      const upadatedText = Todos.map((items) => {
        if (items.id === id) {
          return { ...items, text: newTodotext }
        }
        return items
      })
      setTodos(upadatedText)
    }

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
            onChange={(e) => setTodo(e.target.value)}
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
        {/* Todo List */}
        <div className="space-y-3">
          {Todos.length === 0 ? (
            <p className="text-gray-500 text-center">No todos yet 😴</p>
          ) : (
            <DragDropContext
              onDragEnd={(result) => {
                if (!result.destination) return; // if dropped outside the list, do nothing
                const updatedTodos = Array.from(Todos);
                const [movedItem] = updatedTodos.splice(result.source.index, 1);
                updatedTodos.splice(result.destination.index, 0, movedItem);
                setTodos(updatedTodos);
              }}
            >
              <Droppable droppableId="todos">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {Todos.map((items, index) => (
                      <Draggable key={items.id} draggableId={items.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex justify-between items-center bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 mb-2 hover:shadow-md transition"
                          >
                            <p
                              className={`text-gray-700 font-medium ${items.iscompleted ? "line-through" : ""
                                }`}
                            >
                              {items.text}
                            </p>

                            <div className="flex gap-2">
                              <input
                                type="checkbox"
                                onChange={HandleChecked}
                                checked={items.iscompleted}
                                name={items.id}
                              />
                              <button
                                onClick={() => EditTodo(items.id)}
                                className="text-blue-600 hover:text-blue-800 font-semibold"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => deleteTodo(items.id)}
                                className="text-red-600 hover:text-red-800 font-semibold"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>

      </div>
    </>
  );
}

export default App;
