
import React from 'react'
import UserCard from 'common/useContext/UserContainer/UserCard';

function UserContainer(props) {
  return (
    <div>
      <h2>UserContainer</h2>
      <p>UserContainer 컴포넌트에서 {JSON.stringify(props.user)} prop 을 받아왔습니다. </p>
      <UserCard user={props.user} />
    </div>
  )
}

export default UserContainer