import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailsPage from "./pages/projectDetails";

function App() {
  const [theme, setTheme] = useState("dark");
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Scene hoveredName={hoveredName} theme={theme} />
      </Canvas>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                theme={theme}
                toggleTheme={toggleTheme}
                setHoveredName={setHoveredName}
                hoveredName={hoveredName}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                theme={theme}
                toggleTheme={toggleTheme}
                hoveredName={hoveredName}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                theme={theme}
                toggleTheme={toggleTheme}
                hoveredName={hoveredName}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                theme={theme}
                toggleTheme={toggleTheme}
                hoveredName={hoveredName}
              />
            }
          />
          <Route
            path="/projects/:slugTextId"
            element={
              <ProjectDetailsPage
                theme={theme}
                toggleTheme={toggleTheme}
                hoveredName={hoveredName}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
