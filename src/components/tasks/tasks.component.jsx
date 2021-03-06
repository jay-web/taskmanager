import React, {useContext } from "react";
import {Typography, withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TaskList from "./../tasks_list/tasksList.component";
import TaskForm from "./../tasks_form/tasksForm.component";
import useTaskState from "./../../hooks/useTaskState";
import {TasksContext} from "../../contexts/tasks.contexts";
import styles from "./tasks.style";

function Tasks(props) {
   const initialTasks = [];
   const {classes} = props;

    // const {tasks} = useTaskState(initialTasks);
    const tasks  = useContext(TasksContext);
 
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                
                backgroundColor: "#fafafa"
            }}
            elevation={0}
            >
                <AppBar  position="static" className={classes.header}>
                    <ToolBar>
                        <Typography color="inherit" variant="h5" className={classes.logo}>Tasks</Typography>
                    </ToolBar>
                </AppBar>
                <Grid container justify="center"  className={classes.taskPage}>
                    <Grid item xs={12} md={8} lg={6}  >
                        <TaskForm/>
                        <TaskList 
                            tasks={tasks} 
                         
                            />
                    </Grid>
                   
                </Grid>
               

        </Paper>
    )
}

export default withStyles(styles)(Tasks);