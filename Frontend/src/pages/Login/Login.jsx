import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/users/login", formData);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Save user
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <section className="login">
      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Sign in to continue to AfraGate Global.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="signup-link">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;