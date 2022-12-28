import { useRef, useState } from "react";

function UseRefStudy() {
  let myVar = 0;
  const [myState, setMyState] = useState(0);
  const myRef = useRef(0);

  // 이전 state 저장을 위한 ref
  const myPrevStateRef = useRef();

  // 아무것도 안하고 그냥 rerender 만 시키기
  const [rerender, setRerender] = useState(true);

  function triggerRerender() {
    // state 가 바뀌면 rerender 된다는 점을 이용.
    // rerender 변수가 true <-> false 바뀌면서 계속 trigger (값 자체는 중요치 않음)
    setRerender(!rerender);
  }

  //출력 관련
  function displayValues() {
    console.log(`myVar: ${myVar}, myState: ${myState}, myRef: ${myRef.current}`);
  }

  // myVar 관련

  function incrementMyVar() {
    myVar += 1;
    displayValues();
  }

  function decrementMyVar() {
    myVar -= 1;
    displayValues();
  }

  // myState 관련

  function incrementMyState() {
    myPrevStateRef.current = myState;
    setMyState(myState + 1);
    displayValues();
  }

  function decrementMyState() {
    myPrevStateRef.current = myState;
    setMyState(myState - 1);
    displayValues();
  }

  // myRef 관련

  function incrementMyRef() {
    myRef.current += 1;
    displayValues();
  }

  function decrementMyRef() {
    myRef.current -= 1;
    displayValues();
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
        <div className="box">
          <button onClick={triggerRerender}>아무것도 하지 않고 그냥 rerender 만 시키기!</button>
        </div>
        <div className="box">
          이전 state 인 {myPrevStateRef.current} 에서 현재 state 인 {myState} 로 변경되었습니다.
        </div>
      </div>
    </div>
  );
}

export default UseRefStudy;
