import { Link } from "react-router-dom";

const Navbar = ({ onToggleTheme, darkMode }) => {
  return (
    <nav
      style={{
        padding: "10px 20px",
        background: "inherit",
        color: "inherit",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "0 auto", display: "flex", gap: "30px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <button
        onClick={onToggleTheme}
        style={{
          position: "absolute",
          right: "20px",
          top: "10px",
          padding: "6px 12px",
          border: "1px solid gray",
          borderRadius: "10px",
          background: "inherit",
          color: "inherit",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
