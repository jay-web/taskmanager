import React from "react";
import {ListItem, ListItemText, Checkbox } from "@material-ui/core";
import {IconButton, ListItemSecondaryAction } from "@material-ui/core";

import DeleteIcon  from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


function Task ({task, completed, removeTask, toggleTask}) {
    const textDecoration = completed ? "line-through" : "none";
    return (
        <span>
        <ListItem gutters="true" divider>
          <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTask(task.id)}/>  
          <ListItemText style={{ textDecoration: textDecoration}}>
             {task.item}
          </ListItemText>
          <ListItemSecondaryAction>
              <IconButton aria-label="delete" onClick={() => removeTask(task.id)}>
                  <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit">
                  <EditIcon />
              </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </span>
    )
}

export default Task;