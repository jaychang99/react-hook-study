import UseRefStudy from "common/UseRefStudy";
import UseRefStudyFocus from "common/UseRefStudyFocus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UseRefCardExample from "common/UseRefCardExample";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<UseRefStudy />} />
        <Route path="/focus" exact={true} element={<UseRefStudyFocus />} />
        <Route path="/card" exact={true} element={<UseRefCardExample />} />
      </Routes>
    </Router>
  );
}

export default App;
