// WidthViewer.js

import { useState, useEffect } from 'react';

function WidthViewer() {
  // 현재 창의 너비를 저장할 state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // 매 resize event 발생 시 마다 실행할 함수. 
  function handleResize() {
    setWindowWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  useEffect(() => {
    // 컴포넌트 최초 render 직후 1회만 실행 (빈 의존성 배열)
    window.addEventListener("resize", handleResize)

    // 컴포넌트 unmount 시 (화면에서 사라질 시) event listener 제거
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])


  return (
    <div>
      <p>창 가로 너비: {windowWidth}px</p>
    </div>
  )


}

export default WidthViewer