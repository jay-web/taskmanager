import React from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Task from "./../task/task.component";


function TaskList({tasks, removeTask, toggleTask, updateTask}) {
  
  return (
    <Paper>
      <List>
        {tasks.map((task, i) => {
          return (
            <React.Fragment>
            <Task 
                task={task} 
                key={task.id} 
                completed={task.completed} 
                removeTask={removeTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
                />
              {i < tasks.length - 1 && <Divider />}
              </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
}

export default TaskList;
