import React, {useContext } from "react";
import {Paper, TextField} from "@material-ui/core";
import useInput from "../../hooks/useInput";
import {DispatchContext} from "../../contexts/tasks.contexts";

function TaskForm () {
    const [value, handleChange, reset ] = useInput("");
    const dispatch = useContext(DispatchContext);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "ADD_TASK", task: value});
        // addTask(value);
        reset();
    }

    return (
        <Paper style={{ margin: "1rem 0", padding: "0 .2rem"}}>
            <form onSubmit={onSubmit}>
              <TextField 
                value={value} 
                onChange={handleChange} 
                label="Add new task" 
                fullWidth/>
            </form>
          
        </Paper>
    )
}

export default TaskForm;