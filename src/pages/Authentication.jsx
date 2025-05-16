import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Authentication = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password) {
      setUser({ username }); // Simulating user sign-in
      setSuccessMessage("Sign Up Successful! Redirecting to Dashboard..."); // Show success message
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Your Account</h2>
        <p>Sign up to manage your tasks efficiently.</p>
        
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignUp}>Sign Up</button>

        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Authentication;
