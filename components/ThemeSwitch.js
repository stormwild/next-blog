import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
}

function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const text = !darkMode ? "Light Mode" : "Dark Mode";
  console.log("[ThemSwitch] darkMode:", darkMode);

  const handlClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };
  return (
    <>
      <button onClick={handlClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>{`
        button {
          padding: 0 1.5rem;
          color: inherit;
          background-color: var(--background-color);
          border: none;
          cursor: pointer;
        }
      `}</style>
      {darkMode && <DarkTheme />}
    </>
  );
}

export default ThemeSwitch;
