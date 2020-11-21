import React, {useContext, memo} from "react";
import useToggle from "./../../hooks/useToggle";

import { ListItem, ListItemText, Checkbox } from "@material-ui/core";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "../editTask_form/editTask.component";
import {DispatchContext } from "../../contexts/tasks.contexts";

function Task({ task, completed }) {
  const [isEditing, toggle] = useToggle(false);
  const  dispatch  = useContext(DispatchContext);

  const textDecoration = completed ? "line-through" : "none";
  console.log(task);
  return (
    <span>
      <ListItem gutters="true" 
        style={{ height : "64px"}}>
        {!isEditing ? (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => dispatch({type: "TOGGLE_TASK", id: task.id})}
            />
            <ListItemText style={{ textDecoration: textDecoration }}>
              {task.item}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                aria-label="delete"
                onClick={() => dispatch({type: "REMOVE_TASK", id: task.id})}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => toggle()}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        ) : (
          <EditForm task={task} toggle={toggle} />
        )}
      </ListItem>
    </span>
  );
}

export default memo(Task);
