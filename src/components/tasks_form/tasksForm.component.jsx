import React, { useContext } from "react";
import { Paper, TextField , withStyles } from "@material-ui/core";
import useInput from "../../hooks/useInput";
import { DispatchContext } from "../../contexts/tasks.contexts";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import styles from "./tasksForm.style";

function TaskForm({classes}) {
  const [value, handleChange, reset] = useInput("");
  const dispatch = useContext(DispatchContext);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", task: value });
    // addTask(value);
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", display: "flex", alignItems: "center" }}>
      <PlaylistAddIcon className={classes.icon} />
      <form onSubmit={onSubmit} style={{ flexGrow: 1 }}>
        <TextField
          value={value}
          onChange={handleChange}
          label="Add new task"
          fullWidth
          className={classes.root}
          
        />
      </form>
    </Paper>
  );
}

export default withStyles(styles)(TaskForm);
