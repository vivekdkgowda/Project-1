import { useState } from "react";
import TaskList from "../components/TaskList";
import "../styles/Tasks.css";

const Tasks = ({ tasks, updateTask, addTask }) => {
  const [newTask, setNewTask] = useState({ title: "", priority: "Low", deadline: "", status: "Initial" });

  const handleAddTask = () => {
    if (!newTask.title || !newTask.deadline) {
      alert("Please enter a title and deadline!");
      return;
    }
    addTask(newTask);
    setNewTask({ title: "", priority: "Low", deadline: "", status: "Initial" });
  };

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <div className="task-input">
        <input 
          type="text" 
          placeholder="Task Title" 
          value={newTask.title} 
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
        />
        <select value={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input 
          type="date" 
          value={newTask.deadline} 
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })} 
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} updateTask={updateTask} />
    </div>
  );
};

export default Tasks;
