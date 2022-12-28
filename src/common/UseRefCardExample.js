import "common/styles/useRefCardExample.css";
import { useRef } from "react";

function UseRefCardExample() {
  const cardNo1Ref = useRef();
  const cardNo2Ref = useRef();
  const cardNo3Ref = useRef();
  const cardNo4Ref = useRef();

  const submitButtonRef = useRef();

  function handleInputChange(e, nextRef) {
    const currentInputValue = e.target.value;
    if (nextRef) {
      if (currentInputValue.length === 4) {
        nextRef.current.focus();
      }
    }
  }

  return (
    <div>
      <h1>카드번호</h1>
      <input
        ref={cardNo1Ref}
        onChange={(e) => {
          handleInputChange(e, cardNo2Ref);
        }}
      />
      <input
        ref={cardNo2Ref}
        onChange={(e) => {
          handleInputChange(e, cardNo3Ref);
        }}
      />
      <input
        ref={cardNo3Ref}
        onChange={(e) => {
          handleInputChange(e, cardNo4Ref);
        }}
      />
      <input
        ref={cardNo4Ref}
        onChange={(e) => {
          handleInputChange(e, submitButtonRef);
        }}
      />
      <button
        ref={submitButtonRef}
        onClick={() => {
          console.log(
            `신용카드 번호는 ${cardNo1Ref.current.value}-${cardNo2Ref.current.value}-${cardNo3Ref.current.value}-${cardNo4Ref.current.value}`
          );
        }}
      >
        제출
      </button>
    </div>
  );
}

export default UseRefCardExample;
