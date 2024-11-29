import React from "react";
import { useTheme } from "./ThemeContext";
import { useAuth } from "./AuthContext";

const Content = () => {
  const { theme } = useTheme();

  const { user } = useAuth();

  return (
    <>
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#444",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        height: "100vh",
      }}
    >
      <p>
        This is the {theme === "light" ? "light" : "dark"} theme. Toggle the
        theme to see the changes.
      </p>
    </div>

<div
style={{
  padding: "20px",
  textAlign: "center",
}}
>
{user ? (
  <p>Welcome to the application, {user.name}!</p>
) : (
  <p>Please log in to access the application content.</p>
)}
</div>

</>
  );
};

export default Content;
