import { MyContext } from 'common/useContext'
import React, { useContext } from 'react'

function UserName() {
  const user = useContext(MyContext)

  return (
    <div>
      <h4>UserName</h4>
      <p>사용자의 이름은: {user.name}</p>
    </div>
  )
}

export default UserName