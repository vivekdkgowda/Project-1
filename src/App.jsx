import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import "./styles/styles.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete report", priority: "High", deadline: "2025-03-30", status: "Initial" },
    { id: 2, title: "Fix bugs", priority: "Medium", deadline: "2025-03-28", status: "In Progress" },
  ]);

  const [user, setUser] = useState(null); // User authentication state

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task)));
  };

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: tasks.length + 1 };
    setTasks([...tasks, taskWithId]);
  };

  return (
    <Router>
      {user && <Navbar />}
      {user && <Sidebar />}
      <div className="main-content">
        <Routes>
          {/* Redirect to Sign Up Page if user is not logged in */}
          {!user ? (
            <>
              <Route path="/*" element={<Navigate to="/auth" />} />
              <Route path="/auth" element={<Authentication setUser={setUser} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<Tasks tasks={tasks} updateTask={updateTask} addTask={addTask} />} />
              <Route path="/reports" element={<Reports tasks={tasks} />} />
              <Route path="/auth" element={<Authentication setUser={setUser} />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
