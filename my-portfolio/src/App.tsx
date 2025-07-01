import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/about"
          element={<AboutPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/contact"
          element={<ContactPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
