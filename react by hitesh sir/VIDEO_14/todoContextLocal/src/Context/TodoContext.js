import { useContext, createContext } from "react";

export const TodoContext = createContext({
    toods: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addtodo: (todo,id) => {},
    updateTodo:(todo, id) => {},
    deleteTodo : (id) => {},
    toggleCompletd: (id) => {}
})

export const uestodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider