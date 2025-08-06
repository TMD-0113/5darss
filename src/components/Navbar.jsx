import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, dispatch, basket } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className="navbar bg-base-100 text-base-content shadow-md px-6 py-4 flex justify-between items-center">
    
      <Link to="/" className="text-xl font-bold">
        🛒 Online Shop
      </Link>

      
      <div className="flex items-center gap-4">
      
        <button className="btn btn-outline" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <Link to="/cart" className="relative btn btn-outline">
          Basket
          {basket.length > 0 && (
            <span className="badge badge-sm absolute top-[-8px] right-[-8px]">
              {basket.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
