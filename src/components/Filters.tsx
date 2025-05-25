import type {MouseEvent, ReactElement} from "react";
import {FILTERS_BUTTONS} from "../const.ts";
import {useAppSelector} from "../hooks";
import type {TodosState} from "../types";

export const Filters = (): ReactElement => {
    const {filter} = useAppSelector((state: { [key: string]: TodosState }) => state.todos)


    const handleFilterChange = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        console.log('Filter changed', event);
    }

    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                margin: '10px 0 0 0',
                padding: '0',
                listStyle: 'none',
                background: '#1f2833',
                justifyContent: 'center',
                height: '50px',
                alignItems: 'center',
            }}>
            {
                Object.entries(FILTERS_BUTTONS).map(([key, item]) => {
                    return (
                        <li key={key}>
                            <a href="#"
                               onClick={handleFilterChange}
                               style={{
                                   color: '#66fcf1',
                                   fontSize: '20px',
                                   padding: '0 20px 0 0',
                                   cursor: 'pointer',
                                   textDecoration: 'none',
                               }}
                            >
                                {item.text}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


