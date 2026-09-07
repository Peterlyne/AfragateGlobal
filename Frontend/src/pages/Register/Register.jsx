import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    password: "",
    accountType: "B2C",
    country: "",
    phone: "",
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
      const response = await api.post("/users/register", formData);

      alert(response.data.message || "Registration successful!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed."
      );
    }
  };

  return (
    <section className="register">
      <div className="register-card">

        <h1>Create Account</h1>

        <p>Join AfraGate Global today.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="FullName"
            placeholder="Full Name"
            value={formData.FullName}
            onChange={handleChange}
            required
          />

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

          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          >
            <option value="B2C">B2C</option>
            <option value="B2B">B2B</option>
            <option value="B2G">B2G</option>
          </select>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

      </div>
    </section>
  );
}

export default Register;