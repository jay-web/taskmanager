import React, {useContext} from "react";
import {TextField} from "@material-ui/core";
import useInput from "../../hooks/useInput";
import {TasksContext } from "../../contexts/tasks.contexts";

function EditForm ({task, toggle}) {
    const [value, handleChange, reset] = useInput(task.item);  // using custom hook
    const {updateTask} = useContext(TasksContext);

    const onSubmit =(e) => {
        e.preventDefault();
        updateTask(task.id, value);
        toggle();
        reset()

    }
    return (
        <form onSubmit={onSubmit} style={{ marginLeft: "1rem", width: "90%"}}>
            <TextField 
                fullWidth 
                value={value} 
                onChange={(e) => handleChange(e)}
             />
        </form>
    
    )
}

export default EditForm;