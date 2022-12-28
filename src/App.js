import UseRefStudy from "common/UseRefStudy";
import UseRefStudyFocus from "common/UseRefStudyFocus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<UseRefStudy />} />
        <Route path="/focus" exact={true} element={<UseRefStudyFocus />} />
      </Routes>
    </Router>
  );
}

export default App;
