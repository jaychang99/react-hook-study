import { useRef, useState } from "react";
import "./App.css";

function App() {
  let myVar = 0;
  const [myState, setMyState] = useState(0);
  const myRef = useRef(0);

  // myVar 관련

  function incrementMyVar() {
    myVar += 1;
    console.log(`myVar 이 ${myVar} 로 변경되었습니다. `);
  }

  function decrementMyVar() {
    myVar -= 1;
    console.log(`myVar 이 ${myVar} 로 변경되었습니다. `);
  }

  // myState 관련

  function incrementMyState() {
    setMyState(myState + 1);
  }

  function decrementMyState() {
    setMyState(myState - 1);
  }

  // myRef 관련

  function incrementMyRef() {
    myRef.current += 1;
  }

  function decrementMyRef() {
    myRef.current -= 1;
  }

  return (
    <div>
      <h1>UseRef 스터디</h1>
      <div className="container">
        <div className="box">
          <h2>일반 변수 사용</h2>
          <p>myVar 의 값: {myVar}</p>
          <button onClick={incrementMyVar}>myVar 증가시키기</button>
          <button onClick={decrementMyVar}>myVar 감소시키기</button>
        </div>
        <div className="box">
          <h2>state 사용</h2>
          <p>myState 의 값: {myState}</p>
          <button onClick={incrementMyState}>myState 증가시키기</button>
          <button onClick={decrementMyState}>myState 감소시키기</button>
        </div>
        <div className="box">
          <h2>ref 사용</h2>
          <p>myRef.current 의 값: {myRef.current}</p>
          <button onClick={incrementMyRef}>myRef 증가시키기</button>
          <button onClick={decrementMyRef}>myRef 감소시키기</button>
        </div>
      </div>
    </div>
  );
}

export default App;
