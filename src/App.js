// import logo from './logo.svg';
import "./App.css";
import Tasks from "./components/tasks/tasks.component";
import {TasksProvider} from "./contexts/tasks.contexts";

function App() {
  return (
    <TasksProvider>
     
      <Tasks />
     
     
    </TasksProvider>
  );
}

export default App;
