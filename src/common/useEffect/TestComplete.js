// Test.js

import { useRef, useEffect, useState } from 'react';

function Test() {
  const [inputText, setInputText] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // input 을 잡을 ref 생성
  const inputRef = useRef()

  useEffect(() => {
    // input 의 값 출력
    console.log(inputRef.current.value)
  }, [submitted])

  return (
    <div>
      <input ref={inputRef} onChange={(e) => {
        setInputText(e.target.value)
      }} />
      <button onClick={() => { setSubmitted(true) }}>{submitted ? "제출 완료" : "제출하기"}</button>
      <p>{inputText}</p>
    </div>
  )
}

export default Test