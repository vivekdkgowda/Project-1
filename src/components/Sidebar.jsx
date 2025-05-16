import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
          <li><Link to="/tasks" onClick={() => setIsOpen(false)}>Tasks</Link></li>
          <li><Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link></li>
          <li><Link to="/auth" onClick={() => setIsOpen(false)}>Authentication</Link></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
