import React from 'react'
import { useState } from 'react';
import { useEffect, useCallback } from 'react';

function UseCallbackPage() {
  const [count, setCount] = useState(0)
  const [option, setOption] = useState("찍먹")



  const logger = useCallback(() => {
    console.log("현재 숫자는", count, "입니다")
  }, [count])

  useEffect(() => {
    console.log("logger 함수 변경")
  }, [logger])


  return (<>
    <div>UseCallbackPage</div>

    <h1>
      함수 호출하기

    </h1>

    <button onClick={() => { setCount(count - 1) }}>감소</button>
    <span>{count}</span>
    <button onClick={() => { setCount(count + 1) }}>증가</button>
    <br />
    <br />

    <button onClick={logger}>로그 찍기</button>


    <h1>뿌먹 VS 찍먹</h1>
    <button onClick={() => {
      setOption(option === "찍먹" ? "뿌먹" : "찍먹")
    }}>취향 바꾸기</button>
    <p>{option}</p>
    <hr />
  </>
  )
}

export default UseCallbackPage