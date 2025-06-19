import { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <LandingPage theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
