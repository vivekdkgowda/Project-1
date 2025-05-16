import { useState } from "react";

const TaskItem = ({ task, updateTask }) => {
  const [priority, setPriority] = useState(task.priority);
  const [deadline, setDeadline] = useState(task.deadline);
  const [status, setStatus] = useState(task.status);

  const handleUpdate = () => {
    updateTask(task.id, { priority, deadline, status });
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>Priority: 
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </p>
      <p>Deadline: 
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </p>
      <p>Status: 
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Initial">Initial</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </p>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default TaskItem;
