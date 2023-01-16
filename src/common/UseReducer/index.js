import TodoItem from 'common/UseReducer/TodoItem'
import { useReducer, useState } from 'react'


const initialState = {
  count: 0,
  items: [

  ]
}

function reducer(state, action) {
  console.log('reducer 가 일을 합니다. ')
  const newItem = {
    id: Date.now(),
    name: action.name
  }
  return {
    count: state.count + 1,
    items: [...state.items, newItem]
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
        dispatch({ name: inputValue })
      }}>등록</button>
      <hr />
      <div>
        {data.items.map((item) => (<TodoItem name={item.name} />))}
      </div>

    </div>
  )
}

export default UseReducerPage