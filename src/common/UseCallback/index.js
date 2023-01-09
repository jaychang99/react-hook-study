import React, { useMemo } from 'react'
import { useState, useRef } from 'react';


function getSum(a, b) {
  console.log("getSum called")
  for (let i = 0; i < 1000000000; i++) {
    // do nothing
  }
  for (let i = 0; i < 1000000000; i++) {
    // do nothing again
  }
  return a + b
}

function getDiff(a, b) {
  console.log("getDiff called")
  return a - b
}


function UseMemoPage() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)


  const aRef = useRef(null)
  const bRef = useRef(null)

  const handleCalc = () => {
    setA(aRef.current?.value)
    setB(bRef.current?.value)
  }

  const sum =
    useMemo(() => {
      return getSum(Number(a), 50)
    }, [a])

  const diff = getDiff(Number(b), 50)


  return (
    <>
      <div>UseMemoPage</div>
      <input ref={aRef} />


      <button onClick={handleCalc}>
        계산!
      </button>
      <p>에서 50 더한 결과: {sum}</p>
      {/* 두번째 */}


      <input ref={bRef} />

      <button onClick={handleCalc}>
        계산!
      </button>

      <p>에서 50 뺀 결과: {diff}</p>

    </>
  )
}

export default UseMemoPage