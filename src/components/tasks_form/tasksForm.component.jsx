import React from "react";
import {Paper, TextField} from "@material-ui/core";
import useInput from "../../hooks/useInput";

function TaskForm (props) {
    const [value, handleChange, reset ] = useInput("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.addTask(value);
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