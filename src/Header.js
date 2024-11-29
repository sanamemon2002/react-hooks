import React from "react";
import { useTheme } from "./ThemeContext";
import { useAuth } from "./AuthContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

    const { user, logIn, logOut } = useAuth();
  return (
    <>
    <header
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px",
          backgroundColor: theme === "light" ? "#333" : "#f5f5f5",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </header>


    <header
      style={{
        backgroundColor: "#f5f5f5",
        padding: "10px",
        textAlign: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <button
            onClick={logOut}
            style={{
              padding: "10px",
              backgroundColor: "#333",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <h1>Please Log In</h1>
          <button
            onClick={() => logIn("John Doe")}
            style={{
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Log In
          </button>
        </>
      )}
    </header>
    </>
  );
};

export default Header;
