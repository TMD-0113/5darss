import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/globalContext";

function SignUp() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("registeredUser", JSON.stringify(formData));
    dispatch({ type: "SIGNUP", payload: formData });
    navigate("/login");
  };

  return (
    <section className="bg-[#0a192f] min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#112240] text-white rounded-xl shadow-xl p-10 w-96 space-y-5"
      >
        <h1 className="text-3xl font-bold text-center mb-4 text-[#0096c7]">
          Internet magazin
        </h1>

        <div>
          <label className="block mb-1 text-[#ccd6f6]">Ism:</label>
          <input
            name="firstName"
            type="text"
            placeholder="Ismingizni kiriting"
            className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#0096c7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-[#ccd6f6]">Familiya:</label>
          <input
            name="lastName"
            type="text"
            placeholder="Familiyangizni kiriting"
            className="w-full px-4 py-2 rounded bg-[#0f172a] border border-[#0096c7] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096c7]"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

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

        <button
          type="submit"
          className="w-full bg-[#0096c7] hover:bg-[#0077a8] text-white font-semibold py-2 rounded transition"
        >
          Ro‘yxatdan o‘tish
        </button>

        <p className="text-sm text-center text-[#ccd6f6]">
          Akkauntingiz bormi?{" "}
          <Link to="/login" className="text-[#0096c7] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignUp;
