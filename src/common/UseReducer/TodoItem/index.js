import React from 'react'

function TodoItem({ name, dispatch, id, completed }) {
  return (
    <div>
      <span onClick={() => {
        dispatch({ type: "toggle-todo", id: id })
      }} style={{

        color: completed ? "gray" : "black",
        textDecoration: completed ? "line-through" : "none",
        fontWeight: completed ? "400" : "700"
      }
      }>
        {name}

      </span>
      <button onClick={() => {
        dispatch({ type: "delete-todo", id: id })
      }}>삭제</button>
    </div >
  )
}

export default TodoItem