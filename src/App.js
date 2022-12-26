import "./App.css";
import { useState } from "react";
import UserCard from "./common/UserCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        감소
      </button>
      <hr />
      <UserCard />
    </>
  );
}

export default App;
