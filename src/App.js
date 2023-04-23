import Assignment from "./components/Modules/Assignment/Assignment";
import Quiz from "./components/Modules/Quiz/Quiz";
import Topic from "./components/Modules/Topic/Topic";
import HomePage from "./pages/HomePage/HomePage";
import InstructorPage from "./pages/InstructorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />
        <Routes>
          <Route path="/instructor" element={InstructorPage} />
          <Route path="topic" element={<Topic />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="assignment" element={<Assignment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
