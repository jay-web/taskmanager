import React, {useContext} from "react";
import { List, Paper, Divider } from "@material-ui/core";
import Task from "./../task/task.component";
import {TasksContext} from "../../contexts/tasks.contexts";


function TaskList() {
  const {tasks} = useContext(TasksContext);

  if(tasks.length){
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
                
                  />
                {i < tasks.length - 1 && <Divider />}
                </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  }

  return null;
 
}

export default TaskList;
