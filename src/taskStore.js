import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      createTask: action,
      fetchTasks: action,
      deleteTask: action,
    });
  }

  fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://react-demo-axios-be.herokuapp.com/tasks"
      );
      this.tasks = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createTask = async (newTask) => {
    try {
      const response = await axios.post(
        "https://react-demo-axios-be.herokuapp.com/tasks",
        newTask
      );
      this.tasks.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `https://react-demo-axios-be.herokuapp.com/tasks/${id}`
      );

      this.tasks = this.tasks.filter((task) => task.id !== id);
    } catch (error) {
      console.log(error);
    }
  };
}
const taskStore = new TaskStore();
export default taskStore;
