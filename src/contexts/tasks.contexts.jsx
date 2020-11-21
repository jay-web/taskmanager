import React, {createContext, useReducer } from "react";
import useTaskState from "../hooks/useTaskState";
import taskReducer from "../reducer/todo.reducer";

const defaultTasks = [
    {id: 1, item: "lets do some tasks", completed: false}
]

export const TasksContext = createContext();

export function TasksProvider(props) {
    // const todosmethods = useTaskState(defaultTasks);
    const [tasks, dispatch] = useReducer(taskReducer, defaultTasks);

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            {props.children}
        </TasksContext.Provider>
    )
}