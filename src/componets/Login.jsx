import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login,resendVerificationEmail } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/"); // Redirect to home after login
    } catch (err) {
        alert("Login failed. Please check your email and password.");
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
        <center>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        </center>
      
      
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle}/>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <center>
      {/* <p>Don't have an account? <a href="/register">Register</a></p> */}
      <p>Don't have an account? <span onClick={() => navigate("/register")} style={linkStyle}>Register</span></p>
      </center>
    </div>
  );
};

const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    marginBottom: "10px"
  };
  
  const buttonStyle = {
    backgroundColor: "#1E40AF",
    color: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    width: "100%"
  };
  const linkStyle = {
    color: "#1E40AF",
    cursor: "pointer",
    textDecoration: "underline"
  };

export default Login;
