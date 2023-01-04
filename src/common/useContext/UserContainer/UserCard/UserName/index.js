import React from 'react'

function UserName(props) {
  return (
    <div>
      <h4>UserName</h4>
      <p>UserCard 컴포넌트에서 {JSON.stringify(props.user)} prop 을 받아왔습니다. </p>
      <p>사용자의 이름은: {props.user.name}</p>
    </div>
  )
}

export default UserName