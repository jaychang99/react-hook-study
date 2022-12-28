import { useRef } from "react";

function UseRefStudyFocus() {
  const inputRef = useRef();

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h1>UseRef:: focus Input</h1>
      <div className="container">
        <div className="box">
          <h2>input focus 시키기</h2>
          <input ref={inputRef} />
        </div>

        <div className="box">
          <button onClick={focusInput}>입력하기!</button>
        </div>
      </div>
    </div>
  );
}

export default UseRefStudyFocus;
