import TodoItem from 'common/UseReducer/TodoItem'
import { useReducer, useState, useRef } from 'react'


const initialState = {
  count: 0,
  incomplete: 0,
  items: [

  ]
}

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":

      const newItem = {
        id: Date.now(),
        name: action.name,
        completed: false,
      }
      return {
        count: state.count + 1,
        incomplete: state.incomplete + 1,
        items: [...state.items, newItem]
      }
    case "toggle-todo":


      return {
        count: state.count,
        incomplete: state.items.filter((item) => item.id === action.id)[0].completed ? state.incomplete + 1 : state.incomplete - 1,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, completed: !item.completed }
          } else {
            return item
          }
        })
      }
    case "delete-todo":


      return {
        count: state.count - 1,
        incomplete: state.items.filter((item) => item.id === action.id)[0].completed ? state.incomplete : state.incomplete - 1,
        items: state.items.filter((item) => item.id !== action.id)
      }
    default:
      return state
  }

}

function UseReducerPage() {
  const [inputValue, setInputValue] = useState("")
  const [data, dispatch] = useReducer(reducer, initialState)

  const inputRef = useRef(null)

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <span>총 할 일 개수: {data.count}  </span>
        <span>완료됨: {data.count - data.incomplete}  </span>
        <span>미완료: {data.incomplete}  </span>
      </div>
      <input ref={inputRef} onChange={(e) => { setInputValue(e.target.value) }} />
      <button onClick={() => {
        dispatch({ type: "add-todo", name: inputValue })
        inputRef.current.value = ""
      }}>등록</button>
      <hr />
      <div>
        {data.items.map((item) => (<TodoItem name={item.name} id={item.id} dispatch={dispatch} completed={item.completed} />))}
      </div>

    </div>
  )
}

export default UseReducerPage