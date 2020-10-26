import React from "react";
import { List, Paper } from "@material-ui/core";
import Task from "./../task/task.component";


function TaskList(props) {
  const { tasks } = props;
  console.log({ tasks });
  return (
    <Paper>
      <List>
        {tasks.map((task) => {
          return (
            <Task task={task.item} key={task.id} completed={task.completed} />
          );
        })}
      </List>
    </Paper>
  );
}

export default TaskList;
