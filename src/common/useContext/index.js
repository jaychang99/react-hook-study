import UserContainer from 'common/useContext/UserContainer'
import React, { useState } from 'react'

function UseContextPage() {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 20,
    school: "SKKU",
  })

  return (
    <div>
      <h1>
        UseContextPage
      </h1>
      <button onClick={() => { setUser({ ...user, name: "홍길순" }) }}>유저 바꾸기</button>
      <UserContainer user={user} />
    </div >
  )
}

export default UseContextPage