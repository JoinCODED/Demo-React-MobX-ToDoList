import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import "./App.css";
import AddTaskForm from "./Components/AddTaskForm";
import TasksList from "./Components/TasksList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://react-demo-axios-be.herokuapp.com/tasks"
      );
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (newTask) => {
    try {
      const response = await axios.post(
        "https://react-demo-axios-be.herokuapp.com/tasks",
        newTask
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `https://react-demo-axios-be.herokuapp.com/tasks/${id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    let tempTasks = tasks.filter((task) => task.id !== id);
    setTasks(tempTasks);
  };

  return (
    <>
      <div class="row">
        <AddTaskForm createTask={createTask} />
      </div>
      <TasksList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
    </>
  );
}

export default App;
