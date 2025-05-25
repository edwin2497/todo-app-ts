import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {ITodo, TodoCompletedStatus, TodoId, TodosState} from "../types";

const initialState: TodosState ={
    todos :  [
        {id: 1, title: 'Todo 1', completed: false},
        {id: 2, title: 'Todo 2', completed: true},
        {id: 3, title: 'Todo 3', completed: false},
        {id: 4, title: 'Todo 4', completed: true},
        {id: 5, title: 'Todo 5', completed: false},
    ],
    filter: 'all',
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action: PayloadAction<TodoId>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoStatus: (state, action: PayloadAction<TodoCompletedStatus>) => {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        },
        // onFilterChange: (state, action: PayloadAction<string>) => {
        //
        // }
    },
});

export const {addTodo, removeTodo, toggleTodoStatus} = todosSlice.actions;

export const todosReducer = todosSlice.reducer;