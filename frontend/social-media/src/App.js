import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import SideBar from "./component/SideBar";
function App() {
  return (
    <div className="App">
      <Router>
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} excat />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
