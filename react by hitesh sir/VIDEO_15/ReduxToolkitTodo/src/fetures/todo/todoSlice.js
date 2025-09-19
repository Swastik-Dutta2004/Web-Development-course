import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text:"Todo msg"
    }]
}

export const todoslice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        RemovedTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        upadateTodo: () => {
            const {id, newText} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo){
                todo.text = newText
            }
        }
    }
})

export const {addtodo, RemovedTodo, upadateTodo} = todoslice.actions

export default todoslice.reducer