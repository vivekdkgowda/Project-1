import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Task Manager</h1>
      </div>
      <div className="navbar-center">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/auth" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
