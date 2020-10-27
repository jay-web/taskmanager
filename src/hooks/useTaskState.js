import {useState } from "react";
import { v4 as uuidv4} from "uuid";

const useTaskState = (initialTasks) => {
    const [tasks, setTasks ] = useState(initialTasks);

    const addTask = (newTask) => {
        if(newTask === ""){
            return;
        }
        setTasks([...tasks, {id: uuidv4(), item: newTask, completed: false}])
    }

    const removeTask = (taskId) => {
        const updateTasks = tasks.filter((task) => {
            return task.id  !== taskId;
        })
        setTasks(updateTasks);
    }

    const toggleTask = (taskId) => {
        const updateTasks = tasks.map((task) => {
            if(task.id === taskId){
                return { ...task, completed: !task.completed}
            }else{
                return task;
            }
        });

        setTasks(updateTasks);
    }

    const updateTask = (taskId, newItem) => {
        if(newItem === ""){
            return;
        }
        const updatedTasks = tasks.map(task => {
            if(task.id === taskId){
                return {...task, item: newItem}
            }else{
                return task;
            }
        });

        setTasks(updatedTasks);
    }

    return {
        tasks,
        addTask: addTask,
        removeTask:removeTask,
        toggleTask:toggleTask,
        updateTask:updateTask
        
    }
}

export default useTaskState;