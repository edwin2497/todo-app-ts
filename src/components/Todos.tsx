import type {ReactElement} from "react";
import {Todo} from "./Todo";
import type {TodosState} from "../types";
import {useAppSelector} from '../hooks';
import {Filters} from "./Filters.tsx";

export const Todos = (): ReactElement => {
    const {todos} = useAppSelector((state: { [key: string]: TodosState }) => state.todos)

    return (
       <>
           <ul
               style={{
                   display: 'flex',
                   flexDirection: 'column',
                   gap: '10px',
                   margin: '0',
                   padding: '0',
                   listStyle: 'none'
               }}>
               {todos.map(todo => (
                   <li key={todo.id}
                       style={{
                           position: 'relative',
                           fontSize: '24px',
                           background: '#1f2833'
                       }}
                   >
                       <Todo key={todo.id} todo={todo}/>
                   </li>
               ))}
           </ul>
           <Filters/>
       </>
    )
}