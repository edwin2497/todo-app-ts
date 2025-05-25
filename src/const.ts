export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
} as const;

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        text: 'Todos',
        value: TODO_FILTERS.ALL,
    },
    [TODO_FILTERS.ACTIVE]: {
        text: 'Active',
        value: TODO_FILTERS.ACTIVE,
    },
    [TODO_FILTERS.COMPLETED]: {
        text: 'Completed',
        value: TODO_FILTERS.COMPLETED,
    }
} as const;