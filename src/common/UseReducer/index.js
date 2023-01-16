import TodoItem from 'common/UseReducer/TodoItem'
import { useState, useRef } from 'react'


function UseReducerPage() {
  const [inputValue, setInputValue] = useState("")
  const [count, setCount] = useState(0)
  const [incomplete, setIncomplete] = useState(0)
  const [items, setItems] = useState([])

  const inputRef = useRef(null)

  function deleteItem(id) {
    setCount(count - 1)
    setIncomplete(items.filter((item) => item.id === id)[0].completed ? incomplete : incomplete - 1)
    setItems(items.filter(item => item.id !== id))
  }

  function toggleItem(id) {

    setIncomplete(items.filter((item) => item.id === id)[0].completed ? incomplete + 1 : incomplete - 1)
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !(item.completed) }
      } else {
        return item
      }
    }
    ))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <span>총 할 일 개수: {count}  </span>
        <span>완료됨: {count - incomplete}  </span>
        <span>미완료: {incomplete}  </span>
      </div>
      <input ref={inputRef} onChange={(e) => { setInputValue(e.target.value) }} />
      <button onClick={() => {
        setCount(count + 1);
        setItems([...items, { id: Date.now(), name: inputValue, completed: false }])
        setIncomplete(incomplete + 1)
        inputRef.current.value = ""
      }}>등록</button>
      <hr />
      <div>
        {items.map((item) => (<TodoItem key={item.id} name={item.name} id={item.id} deleteItem={() => { deleteItem(item.id) }} toggleItem={() => { toggleItem(item.id) }} completed={item.completed} />))}

      </div>

    </div >
  )
}

export default UseReducerPage