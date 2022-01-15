import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: { todos: [] },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const todo = state.todos.findIndex(todo => todo.id === action.payload);
            state.todos.splice(todo, 1)
        },
        moveForward: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.stage += 1
            }
        },
        moveBackward: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.stage -= 1
            }
        }
    }
})

export const { addTodo, deleteTodo, moveForward, moveBackward } = todosSlice.actions;
export default todosSlice.reducer