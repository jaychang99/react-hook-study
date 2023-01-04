import UseRefStudy from "common/UseRefStudy";
import UseRefStudyFocus from "common/UseRefStudyFocus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import UseRefCardExample from "common/UseRefCardExample";
import UseEffectTest from "common/useEffect/UseEffectTest";
import { useState } from "react";
import Test from "common/useEffect/Test";
import WidthViewer from "common/useEffect/WidthViewer";
import Study from './common/useEffect/Study';
import UseContextPage from "common/useContext";

function App() {
  const [showUseEffectTest, setShowUseEffectTest] = useState(true)
  return (
    <>
      {/* <button onClick={() => { setShowUseEffectTest(!showUseEffectTest) }}>토글!</button> */}
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<UseRefStudy />} />
          <Route path="/focus" exact={true} element={<UseRefStudyFocus />} />
          <Route path="/card" exact={true} element={<UseRefCardExample />} />
          <Route path="/useeffecttest" exact={true} element={showUseEffectTest ? <UseEffectTest /> : <></>} />
          <Route path="/test" exact={true} element={<Test />} />
          <Route path="/study" exact={true} element={<Study />} />
          <Route path="/unmounttest" exact={true} element={<WidthViewer />} />
          <Route path="/usecontext" exact={true} element={<UseContextPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
