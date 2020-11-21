import { v4 as uuidv4} from "uuid";

const taskReducer = (state, action) => {
    switch(action.type){
        case "ADD_TASK":
            if(action.task === ""){
                return state;
            }else{
                return [...state, {id: uuidv4(), item: action.task, completed: false}]
            }
        case "REMOVE_TASK":
            return state.filter((task) => {
                return task.id  !== action.id;
            });
        case "TOGGLE_TASK":
            return state.map((task) => {
                if(task.id === action.id){
                    return { ...task, completed: !task.completed}
                }else{
                    return task;
                }
            });
        case "UPDATE_TASK":
            if(action.newTask === ""){
                return state;
            }else{
                return state.map(task => {
                    if(task.id === action.id){
                        return {...task, item: action.newTask}
                    }else{
                        return task;
                    }
                });
            }
        default :
            return state;
          
    }
}



export default taskReducer;