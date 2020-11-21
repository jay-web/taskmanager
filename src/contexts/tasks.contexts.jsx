import React, { createContext } from "react";
// import useTaskState from "../hooks/useTaskState";
import taskReducer from "../reducer/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocaStorageReducer";

const defaultTasks = [{ id: 1, item: "lets do some tasks", completed: false }];

export const TasksContext = createContext();
export const DispatchContext = createContext();

export function TasksProvider(props) {
  // const todosmethods = useTaskState(defaultTasks);
  const [tasks, dispatch] = useLocalStorageReducer("todos", defaultTasks, taskReducer);

  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
          {props.children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  );
}
