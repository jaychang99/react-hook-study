import TodoItem from 'common/UseReducer/TodoItem'
import { useReducer, useState } from 'react'


const initialState = {
  count: 0,
  items: [

  ]
}

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":

      const newItem = {
        id: Date.now(),
        name: action.name
      }
      return {
        count: state.count + 1,
        items: [...state.items, newItem]
      }
    case "delete-todo":


      return {
        count: state.count - 1,
        items: state.items.filter((item) => item.id !== action.id)
      }
    default:
      return state
  }

}

function UseReducerPage() {
  const [inputValue, setInputValue] = useState("")
  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <span>총 할 일 개수: {data.count}  </span>
        <span>완료됨: 3  </span>
        <span>미완료: 1  </span>
      </div>
      <input onChange={(e) => { setInputValue(e.target.value) }} />
      <button onClick={() => {
        dispatch({ type: "add-todo", name: inputValue })
      }}>등록</button>
      <hr />
      <div>
        {data.items.map((item) => (<TodoItem name={item.name} id={item.id} dispatch={dispatch} />))}
      </div>

    </div>
  )
}

export default UseReducerPage