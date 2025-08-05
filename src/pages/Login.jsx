import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));
    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      dispatch({ type: "LOGIN", payload: storedUser });
      navigate("/");
    } else {
      setError("Email yoki parol noto‘g‘ri.");
    }
  };

  return (
    <section className="bg-[#0a192f] min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#112240] text-white rounded-xl shadow-xl p-10 w-96 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-[#0096c7]">
          Internet magazin
        </h1>

        <div>
          <label className="block mb-1 text-[#ccd6f6]">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email kiriting"
            className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#0096c7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-[#ccd6f6]">Parol:</label>
          <input
            name="password"
            type="password"
            placeholder="Parol kiriting"
            className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#0096c7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white font-semibold py-2 rounded transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-[#ccd6f6]">
          Akkauntingiz yo‘qmi?{" "}
          <Link to="/sign" className="text-[#0096c7] hover:underline">
            Ro‘yxatdan o‘tish
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
