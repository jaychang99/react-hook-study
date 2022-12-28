import { useRef, useState } from "react";
import "./App.css";

function App() {
  let myVar = 0;
  const [myState, setMyState] = useState(0);
  const myRef = useRef(0);

  function incrementMyVar() {
    myVar += 1;
    console.log(`myVar 이 ${myVar} 로 변경되었습니다. `);
  }

  function decrementMyVar() {
    myVar -= 1;
    console.log(`myVar 이 ${myVar} 로 변경되었습니다. `);
  }

  return (
    <div>
      <h1>UseRef 스터디</h1>
      <div class="container">
        <div class="box">
          <h2>일반 변수 사용</h2>
          <p>myVar 의 값: {myVar}</p>
          <button onClick={incrementMyVar}>myVar 증가시키기</button>
          <button onClick={decrementMyVar}>myVar 감소시키기</button>
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
