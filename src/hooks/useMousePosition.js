import { useEffect, useState } from 'react';



function useMousePosition() {

  function handleMouseMove(event) {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })

  }

  const [position, setPosition] = useState({ x: null, y: null })

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}

export default useMousePosition;