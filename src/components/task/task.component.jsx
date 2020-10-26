import React from "react";
import useToggle from "./../../hooks/useToggle";

import { ListItem, ListItemText, Checkbox } from "@material-ui/core";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "../editTask_form/editTask.component";

function Task({ task, completed, removeTask, toggleTask, updateTask }) {
  const [isEditing, toggle] = useToggle(false);

  const textDecoration = completed ? "line-through" : "none";
  return (
    <span>
      <ListItem gutters="true" 
        style={{ height : "64px"}}>
        {!isEditing ? (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => toggleTask(task.id)}
            />
            <ListItemText style={{ textDecoration: textDecoration }}>
              {task.item}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="delete"
                onClick={() => removeTask(task.id)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => toggle()}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        ) : (
          <TextField task={task} updateTask={updateTask} toggle={toggle} />
        )}
      </ListItem>
    </span>
  );
}

export default Task;
