import type {ReactElement} from "react";
import {Todos} from "./components/Todos";

export const App = (): ReactElement => {
    return (
        <div style={{
            margin:'130px 0 40px 0',
            position: 'relative'
        }}>
            <h1 style={{
                position: 'absolute',
                top: '-140px',
                width:' 100%',
                fontSize: '80px',
                fontWeight: '200',
                textAlign: 'center',
                color: '#66fcf1'
            }}>Todo List</h1>
            <Todos/>
        </div>
    )
}

