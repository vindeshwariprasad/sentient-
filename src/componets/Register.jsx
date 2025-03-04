import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate("/login"); // Redirect to login after successful registration
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
        <center>
        <h2>Register</h2>
        </center>
      
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle}/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle}/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle}/>
        <button type="submit" style={buttonStyle}>Register</button>
      </form>
      <center>
      {/* <p>Already have an account? <a href="/login">Login</a></p> */}
      <p>Already have an account? <span onClick={() => navigate("/login")} style={linkStyle}>Login</span></p>
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

export default Register;
