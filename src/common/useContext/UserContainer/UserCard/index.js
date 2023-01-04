import UserName from 'common/useContext/UserContainer/UserCard/UserName'
import React from 'react'

function UserCard(props) {
  return (
    <div>
      <h3>UserCard</h3>
      <p>UserCard 컴포넌트에서 {JSON.stringify(props.user)} prop 을 받아왔습니다. </p>
      <UserName user={props.user} />

    </div>
  )
}

export default UserCard