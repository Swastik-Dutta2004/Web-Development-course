import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo,id) => {},
    updateTodo:(todo, id) => {},
    deleteTodo : (id) => {},
    toggleCompletd: (id) => {}
})

export const uestodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider