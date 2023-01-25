import useLocalStorage from 'hooks/useLocalStorage'
import useMousePosition from 'hooks/useMousePosition'
import React from 'react'

function CustomHookPage() {
  const position = useMousePosition()
  const [data, setData] = useLocalStorage("testData", "hello, world")

  return (
    <div>
      <h1>
        CustomHookPage
      </h1>

      <p>마우스 X 좌표: {position.x}</p>
      <p>마우스 Y 좌표: {position.y}</p>
      <p>로컬스토리지 값: {data}</p>
      <input onChange={(e) => {
        setData(e.target.value)
      }} />
    </div>
  )
}

export default CustomHookPage