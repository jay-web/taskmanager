import React, {useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TaskList from "./../tasks_list/tasksList.component";
import TaskForm from "./../tasks_form/tasksForm.component";
import useTaskState from "./../../hooks/useTaskState";
import {TasksContext} from "../../contexts/tasks.contexts";

function Tasks() {
   const initialTasks = [];

    // const {tasks} = useTaskState(initialTasks);
    const {tasks } = useContext(TasksContext);
 
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
            >
                <AppBar color="primary" position="static" style={{ height: "64px", marginBottom: "1rem"}}>
                    <ToolBar>
                        <Typography color="inherit" variant="h5" >Tasks</Typography>
                    </ToolBar>
                </AppBar>
                <Grid container justify="center" >
                    <Grid item xs={12} md={8} lg={6}>
                        <TaskForm/>
                        <TaskList 
                            tasks={tasks} 
                         
                            />
                    </Grid>
                   
                </Grid>
               

        </Paper>
    )
}

export default Tasks;