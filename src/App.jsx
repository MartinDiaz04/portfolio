import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import AboutMe from "./screens/AboutMe";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
