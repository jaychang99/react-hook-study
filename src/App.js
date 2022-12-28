import { useRef, useState } from "react";
import "./App.css";

function App() {
  let myVar = 0;
  const [myState, setMyState] = useState(0);
  const myRef = useRef(0);

  return (
    <div>
      <h1>UseRef 스터디</h1>
      <div class="container">
        <div class="box">
          <h2>일반 변수 사용</h2>
          <p>myVar 의 값: {myVar}</p>
        </div>
        <div class="box">
          <h2>state 사용</h2>
          <p>myState 의 값: {myState}</p>
        </div>
        <div class="box">
          <h2>ref 사용</h2>
          <p>myRef.current 의 값: {myRef.current}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
