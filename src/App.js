import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import TasksList from "./Components/TasksList";

function App() {
  return (
    <>
      <div class="row">
        <AddTaskForm />
      </div>
      <TasksList />
    </>
  );
}

export default App;
