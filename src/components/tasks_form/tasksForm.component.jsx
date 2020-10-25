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
        <Paper>
            <form onSubmit={onSubmit}>
              <TextField value={value} onChange={handleChange} placeholder="Type here" />
            </form>
          
        </Paper>
    )
}

export default TaskForm;