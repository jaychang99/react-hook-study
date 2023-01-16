import React from 'react'

function TodoItem({ name, completed, deleteItem, toggleItem }) {
  return (
    <div>
      <span onClick={toggleItem} style={{

        color: completed ? "gray" : "black",
        textDecoration: completed ? "line-through" : "none",
        fontWeight: completed ? "400" : "700"
      }
      }>
        {name}

      </span>
      <button onClick={deleteItem}>삭제</button>
    </div >
  )
}

export default TodoItem