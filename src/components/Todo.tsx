import type {FC, ChangeEvent, ReactElement, MouseEvent} from "react";
import {useAppDispatch,} from '../hooks';
import type {ITodo} from "../types";
import {removeTodo, toggleTodoStatus} from "../store";

interface ITodoProps {
    todo: ITodo;
}

export const Todo: FC<ITodoProps> = ({todo}): ReactElement => {
    const dispatch = useAppDispatch();

    const onRemoveTodo = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(removeTodo({id: todo.id}));
    }

    const onToggleTodo = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(toggleTodoStatus({id: todo.id, completed: event.target.checked}));
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <input id={`${todo.id}`} style={{
                transform: 'scale(1.5)',
                margin: '0 0 0 20px',
                cursor: 'pointer',
            }} checked={todo.completed} type="checkbox" onChange={onToggleTodo}/>
            <label
                style={{
                    overflowWrap: 'break-word',
                    padding: '15px 15px 15px 60px',
                    display: 'block',
                    lineHeight: '1.2',
                    transition: 'color 0.4s',
                    fontWeight: '400',
                }}
            >{todo.title}</label>
            <button
                type='button'
                style={{
                    background: 'none',
                    border: 'none',
                    right: '0px',
                    position: 'absolute',
                    color: '#66fcf1',
                    fontSize: '20px',
                    padding: '0 20px 0 0',
                    cursor: 'pointer',
                }} onClick={onRemoveTodo}>
                x
            </button>
        </div>
    )
}