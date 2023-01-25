import { useEffect, useState } from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({ x: null, y: null })

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    });

    return () => {
      document.removeEventListener('mouseover')
    }
  }, [])

  return position
}

export default useMousePosition;