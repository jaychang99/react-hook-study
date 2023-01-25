import { useEffect, useState } from 'react';



function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(localStorage.getItem(key) ?? initialValue)

  useEffect(() => {
    localStorage.setItem(key, data)


  }, [data, key])

  return [data, setData]
}

export default useLocalStorage;