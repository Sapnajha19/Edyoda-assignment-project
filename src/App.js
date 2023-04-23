import Home from "./components/Home/Home";
import Assignment from "./components/Modules/Assignment/Assignment";
import Quiz from "./components/Modules/Quiz/Quiz";
import Topic from "./components/Modules/Topic/Topic";
import HomePage from "./pages/HomePage/HomePage";
import InstructorPage from "./pages/InstructorPage";
import ModulesPage from "./pages/ModulesPage/ModulesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      
      <Router>
      <HomePage/>
       {/* <ModulesPage/> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />} exact/> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/module" element={<ModulesPage />} /> */}
        <Route path="/instructor" element={InstructorPage}/>
        <Route path="topic" element={<Topic />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="assignment" element={<Assignment />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
