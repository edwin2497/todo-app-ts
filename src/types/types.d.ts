import {TODO_FILTERS} from "../const.ts";

export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export type TodoId = Pick<ITodo, 'id'>
export type TodoTitle = Pick<ITodo, 'title'>
export type TodoCompleted = Pick<ITodo, 'completed'>
export type TodoCompletedStatus = Pick<ITodo, 'id' | 'completed'>
export type FiltersValues = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export interface TodosState {
    todos: ITodo[];
    filter: FiltersValues
}

