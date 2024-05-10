import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Studies from "./screens/Studies";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/studies" element={<Studies/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
