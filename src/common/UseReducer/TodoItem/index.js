import React from 'react'

function TodoItem({ name, dispatch, id }) {
  return (
    <div>
      <span>
        {name}

      </span>
      <button onClick={() => {
        dispatch({ type: "delete-todo", id: id })
      }}>삭제</button>
    </div>
  )
}

export default TodoItem