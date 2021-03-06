import React, {useContext, memo} from "react";
import useToggle from "./../../hooks/useToggle";

import { ListItem, ListItemText, Checkbox, withStyles } from "@material-ui/core";
import { IconButton, ListItemSecondaryAction } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditForm from "../editTask_form/editTask.component";
import {DispatchContext } from "../../contexts/tasks.contexts";
import styles from "./task.style";

function Task({ task, completed, classes }) {
  const [isEditing, toggle] = useToggle(false);
  const  dispatch  = useContext(DispatchContext);
  

  const textDecoration = completed ? "line-through" : "none";
  console.log(task);
  return (
    <span>
      <ListItem gutters="true" className={classes.root}>
        {!isEditing ? (
          <>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              className={classes.checkbox}
              color="default"
              onClick={() => dispatch({type: "TOGGLE_TASK", id: task.id})}
            />
            <ListItemText style={{ textDecoration: textDecoration, wordWrap: "break-word", fontFamily: 'Akaya Telivigala, cursive'}} disableTypography={false}>
              {task.item}
            </ListItemText>
            <ListItemSecondaryAction className={classes.textBox}>
              <IconButton
                aria-label="delete"
                onClick={() => dispatch({type: "REMOVE_TASK", id: task.id})}
              >
                <DeleteIcon className={classes.deleteIcon} />
              </IconButton>
              <IconButton aria-label="edit" onClick={() => toggle()}>
                <EditIcon className={classes.editIcon} />
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

export default memo(withStyles(styles)(Task));
