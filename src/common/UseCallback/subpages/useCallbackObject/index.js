import React from 'react'
import { useState } from 'react';
import { useEffect, useCallback } from 'react';

function useCallbackObject() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(true)

  const paragraphStyle = (dark) => {
    return {

      padding: "16px",
      backgroundColor: dark ? "black" : "skyblue",
      color: dark ? "skyblue" : "black",
      transition: "0.2s"
    }
  }

  const logger = useCallback(() => {
    console.log("현재 숫자는", count, "입니다")
  }, [count])

  useEffect(() => {
    console.log("logger 함수 변경")
  }, [logger])


  return (<>
    <div>useCallbackObject</div>

    <h1>
      함수 호출하기

    </h1>

    <button onClick={() => { setCount(count - 1) }}>감소</button>
    <span>{count}</span>
    <button onClick={() => { setCount(count + 1) }}>증가</button>
    <br />
    <br />

    <button onClick={logger}>로그 찍기</button>


    <h1>다크  VS 라이트</h1>
    <button onClick={() => {
      setDark(dark ? false : true)
    }}>모드 전환</button>
    <p style={
      paragraphStyle
    }>{dark ? "dark mode" : "light mode"}</p>

    <hr />
  </>
  )
}

export default useCallbackObject