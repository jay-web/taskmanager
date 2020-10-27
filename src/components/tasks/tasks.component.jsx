import React, {useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TaskList from "./../tasks_list/tasksList.component";
import TaskForm from "./../tasks_form/tasksForm.component";
import useTaskState from "./../../hooks/useTaskState";

function Tasks() {
   const initialTasks = JSON.parse(window.localStorage.getItem("tasks") || "[]");

    const {tasks, addTask,
        removeTask,
        toggleTask,
        updateTask} = useTaskState(initialTasks);
   
    useEffect(() => {
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


   
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
                        <TaskForm addTask={addTask}/>
                        <TaskList 
                            tasks={tasks} 
                            removeTask={removeTask} 
                            toggleTask={toggleTask}
                            updateTask={updateTask}
                            />
                    </Grid>
                   
                </Grid>
               

        </Paper>
    )
}

export default Tasks;