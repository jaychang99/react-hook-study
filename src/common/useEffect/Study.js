// Test.js

import { useRef } from 'react';

function Test() {
  // input 을 잡을 ref 생성
  const inputRef = useRef()

  // input 의 값 출력
  console.log(inputRef.current.value)

  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default Test