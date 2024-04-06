import React from "react";
import "./LightDarkMode.css";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [fontSize, setFontSize] = useLocalStorage("fontSize", "normal");

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleChangeFontSize() {
    setFontSize(fontSize === "normal" ? "big" : "normal");
  }

  return (
    <div
      className="containerLightDarkMode"
      id="lightDarkMode"
      dataTheme={theme}
    >
      <h1 dataFontSize={fontSize}>9.Light Dark Mode</h1>
      <button onClick={handleChangeFontSize}>
        Font size : {fontSize === "normal" ? "Normal" : "Big"}
      </button>
      <button onClick={handleChangeTheme}>Change Theme</button>
    </div>
  );
};

export default LightDarkMode;
