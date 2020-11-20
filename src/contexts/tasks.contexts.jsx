import React, {createContext } from "react";
import useTaskState from "../hooks/useTaskState";

const defaultTasks = [
    {id: 1, item: "lets do some tasks", completed: false}
]

export const TasksContext = createContext();

export function TasksProvider(props) {
    const todosmethods = useTaskState(defaultTasks);

    return (
        <TasksContext.Provider value={todosmethods}>
            {props.children}
        </TasksContext.Provider>
    )
}