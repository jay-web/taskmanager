import React from "react";
import { List, ListItem, ListItemText, Paper } from '@material-ui/core';


function TaskList(props) {
    const {tasks} = props;
    console.log({tasks});
    return (
        <Paper>
            <List> 
                {tasks.map((task) => {
                  return <span key={task.id}>
                         <ListItem  gutters="true" divider>
                        <ListItemText >{task.item}</ListItemText>
                    </ListItem>
                  </span>
                
                
                
                })}
            </List>
        </Paper>
       
    )
}

export default TaskList; 