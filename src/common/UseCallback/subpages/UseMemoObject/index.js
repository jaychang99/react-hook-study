import React, { useMemo } from 'react'
import { useState, useRef } from 'react';
import { useEffect } from 'react';

function UseMemoObject() {
  const [option, setOption] = useState("찍먹")
  const [campus, setCampus] = useState("율전")

  const location = {
    city: campus === "율전" ? "수원" : "서울"
  }

  useEffect(() => {
    console.log("location 이 변경됨! 🤭")
  }, [location])




  return (
    <>
      <div>UseMemoPage</div>
      <h1>뿌먹 VS 찍먹</h1>
      <button onClick={() => {
        setOption(option === "찍먹" ? "뿌먹" : "찍먹")
      }}>취향 바꾸기</button>
      <p>{option}</p>
      <hr />

      <h1>나는 지금 어디에?</h1>
      <button onClick={() => {
        setCampus(campus === "율전" ? "명륜" : "율전")
      }}>장소 바꾸기</button>
      <p>{campus}</p>
      <p>도시: {location.city}</p>
      <hr />

    </>
  )
}

export default UseMemoObject