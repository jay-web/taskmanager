import React from "react";
import { List, Paper } from "@material-ui/core";
import Task from "./../task/task.component";


function TaskList({tasks, removeTask}) {
  
  return (
    <Paper>
      <List>
        {tasks.map((task) => {
          return (
            <Task 
                task={task} 
                key={task.id} 
                completed={task.completed} 
                removeTask={removeTask}
                />
          );
        })}
      </List>
    </Paper>
  );
}

export default TaskList;
