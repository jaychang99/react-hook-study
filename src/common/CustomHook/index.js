import useMousePosition from 'hooks/useMousePosition'
import React from 'react'

function CustomHookPage() {
  const position = useMousePosition()


  return (
    <div>
      <h1>
        CustomHookPage
      </h1>

      <p>마우스 X 좌표: {position.x}</p>
      <p>마우스 Y 좌표: {position.y}</p>
    </div>
  )
}

export default CustomHookPage