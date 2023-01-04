import UserContainer from 'common/useContext/UserContainer'
import React, { createContext, useState } from 'react'

export const MyContext = createContext()

function UseContextPage() {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 20,
    school: "SKKU",
  })


  return (
    <MyContext.Provider value={user}>
      <div>
        <h1>
          UseContextPage
        </h1>
        <button onClick={() => { setUser({ ...user, name: "홍길순" }) }}>유저 바꾸기</button>
        <UserContainer />
      </div >
    </MyContext.Provider>
  )
}

export default UseContextPage